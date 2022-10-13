import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './components/organisms/';
import { useSelector } from 'react-redux';
import {LandingPage,Home} from './pages';
import AudioButton from './components/molecules/AudioButton/AudioButton';

export default function App() {
  //STATES

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
       
       

      {navVisible && <Menu />}

      <Routes>
         <Route path="/" element={<Home />} /> 
        <Route path="about" element={<LandingPage />} />
        <Route path="gallery" element={<LandingPage />} />
        <Route path="sponsors" element={<LandingPage/>} />
        <Route path="team" element={<LandingPage />} />
        <Route path="register" element={<LandingPage />} />
        <Route path="Footer" element={<LandingPage/>} />
        <Route path="admin" element={<LandingPage />} />
        <Route path="events" element={<LandingPage/>} />
        {/* <Route path="" element={<ErrorPage />} /> */}
      </Routes> 
        <AudioButton/>
      
        
     </div> 
  );
}
