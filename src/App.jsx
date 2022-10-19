import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './components/organisms/';
import { useSelector } from 'react-redux';
import MenuBar from './pages/MenuBar/MenuBar';



import {LandingPage,Home,Sponsors,About} from './pages';
import AudioButton from './components/molecules/AudioButton/AudioButton';
import ParticlesBackground from './pages/landingPage/ParticlesBackground';
import { RegisterGuest, RegisterSponsors } from './components/molecules';
let currentTime = new Date();
let hour = currentTime.getHours();




export default function App() {
  //STATES
  const [isPhone, setIsPhone] = useState(window.matchMedia("max-width:600px").matches);
  useEffect(()=> {
    window.matchMedia("(max-width: 600px)")
    .addEventListener('change', e => setIsPhone( e.matches));
  }, [])


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
       

      {navVisible && (isPhone ? <MenuBar/> : <Menu/>)}

    <div 
   style={{
          backgroundImage:(hour>=6 &&hour<=16)?'linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)':'linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'
        }}
    >
       


      {/* {navVisible && <Menu />} */}


      <Routes>
         <Route path="/" element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<LandingPage />} />
        <Route path="sponsors" element={<LandingPage/>} />
        <Route path="team" element={<LandingPage />} />
        <Route path="register" element={<LandingPage />} />
        <Route path="Footer" element={<LandingPage/>} />
        <Route path="admin" element={<LandingPage />} />
        <Route path="events" element={<LandingPage/>} />
        <Route path="registerSponsors" element={<RegisterSponsors/>} />
        <Route path="registerGuest" element={<RegisterGuest/>} />
        {/* <Route path="" element={<ErrorPage />} /> */}

      </Routes> 
        <AudioButton/>
      
        
     </div> 
     </div>
  );
}
