import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './components/organisms/';
import { useSelector } from 'react-redux';
import {LandingPage} from './pages';
import {Event} from './pages'


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
       

      {/* {navVisible && <Menu />} */}

      <Routes>
         <Route path="/" element={< LandingPage />} /> 
        {/* <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="sponsors" element={<Sponsors />} /> */}
        {/* <Route path="team" element={<Team />} /> */}
        {/* <Route path="register" element={<Register />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="admin" element={<Admin />} /> */}
        <Route path="events" element={<Event/>} />
        {/* <Route path="" element={<ErrorPage />} /> */}
      </Routes> 
      
        
     </div> 
  );
}
