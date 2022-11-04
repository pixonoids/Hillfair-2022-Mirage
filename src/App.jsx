import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './components/organisms/';
import { Error } from './components/molecules/';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import MenuBar from './pages/MenuBar/MenuBar';


import {LandingPage,Home,Sponsors,About,RegisterPage,Events, PdfPage, GalleryPage} from './pages';



import AudioButton from './components/molecules/AudioButton/AudioButton';
import ParticlesBackground from './pages/landingPage/ParticlesBackground';
let currentTime = new Date();
let hour = currentTime.getHours();


export default function App() {
  //STATES
  // const [isPhone, setIsPhone] = useState(window.matchMedia("max-width:600px").matches);
  // useEffect(()=> {
  //   window.matchMedia("(max-width: 600px)")
  //   .addEventListener('change', e => setIsPhone( e.matches));
  // }, [])
  const isPhone = useMediaQuery({
    query: "(max-width: 600px)"
  });


    // useHideNavigation();
  const navVisible = useSelector((state) => state.ui.navVisible);
  const [enteringState, setEnteringState] = useState(
    sessionStorage.getItem('enteringState') === null
  );

  //EFFECTS
  useEffect(() => {
    sessionStorage.setItem('enteringState', false);
  }, []);

  //FUNCTIONS 

  //RENDER
  return (
    <div>
       

      {/* {navVisible && <MenuBar/>} */}
      {navVisible && (isPhone ? <MenuBar/> : <Menu/>)}

    <div 
   style={{
          backgroundImage:(hour>=6 &&hour<=17)?'linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)':'linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'
        }}
    >
       


      {/* {navVisible && <Menu />} */}


      <Routes>
       <Route path='*' element={<Error />}/>
         <Route path="/" element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="sponsors" element={<LandingPage/>} />
        <Route path="team" element={<LandingPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="Footer" element={<LandingPage/>} />
        <Route path="admin" element={<LandingPage />} />
        <Route path="events" element={<Events/>} />
        <Route path="download" element={<PdfPage/>} />
     
        {/* <Route path="" element={<ErrorPage />} /> */}

      </Routes> 
        <AudioButton/>
      
        
     </div> 
     </div>
  );
}
