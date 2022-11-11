import React, { Suspense, useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/organisms/";
import { ClubCards, Error } from "./components/molecules/";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import MenuBar from "./pages/MenuBar/MenuBar";

import {
  LandingPage,
  Home,
  Sponsors,
  RegisterPage,
  Events,
  PdfPage,
  Team,
} from "./pages";

import AudioButton from "./components/molecules/AudioButton/AudioButton";

// dynamic imports
const GalleryPage = React.lazy(() => import("./pages/galleryPage/GalleryPage"));
const About = React.lazy(() => import("./pages/About/About"));

//lazy loading

let currentTime = new Date();
let hour = currentTime.getHours();

export default function App() {
  const isPhone = useMediaQuery({
    query: "(max-width: 600px)",
  });

  // useHideNavigation();
  const navVisible = useSelector((state) => state.ui.navVisible);
  const [enteringState, setEnteringState] = useState(
    sessionStorage.getItem("enteringState") === null
  );

  //EFFECTS
  useEffect(() => {
    sessionStorage.setItem("enteringState", false);
  }, []);

  //RENDER
  return (
    <div>
      {/* {navVisible && <MenuBar/>} */}
      {navVisible && (isPhone ? <MenuBar /> : <Menu />)}
      <div
        style={{
          backgroundImage:
            hour >= 6 && hour <= 17
              ? "linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)"
              : "linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
        }}
      >
        {/* {navVisible && <Menu />} */}

        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<LandingPage/>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="gallery"
            element={
              <Suspense fallback={<LandingPage />}>
                <GalleryPage />
              </Suspense>
            }
          />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="team" element={<Team />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="Footer" element={<LandingPage />} />
          <Route path="admin" element={<LandingPage />} />
          <Route path="events" element={<Events />} />
          <Route path="download" element={<PdfPage />} />
          <Route path="club" element={<ClubCards />} />

          {/* <Route path="" element={<ErrorPage />} /> */}
        </Routes>
        <AudioButton />
      </div>
    </div>
  );
}
