import React, { Suspense, useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/organisms/";
import { ClubCards, Error } from "./components/molecules/";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import MenuBar from "./pages/MenuBar/MenuBar";

import { LandingPage, Home, RegisterPage, PdfPage } from "./pages";

import AudioButton from "./components/molecules/AudioButton/AudioButton";
import { Loader } from "./components/atoms";

// dynamic imports
const GalleryPage = React.lazy(() => import("./pages/galleryPage/GalleryPage"));
const About = React.lazy(() => import("./pages/About/About"));
const Team = React.lazy(() => import("./pages/teamPage/TeamPage"));
const Sponsors = React.lazy(() => import("./pages/Sponsors/Sponsors"));
const Events = React.lazy(() => import("./pages/eventPage/EventPage"));

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
      {navVisible && (isPhone ? <MenuBar /> : <Menu />)}
      <div
        style={{
          backgroundImage:
            hour >= 6 && hour <= 17
              ? "linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)"
              : "linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
        }}
      >
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="gallery"
            element={
              <Suspense fallback={<Loader />}>
                <GalleryPage />
              </Suspense>
            }
          />
          <Route
            path="sponsors"
            element={
              <Suspense fallback={<Loader />}>
                <Sponsors />
              </Suspense>
            }
          />
          <Route
            path="team"
            element={
              <Suspense fallback={<Loader />}>
                <Team />
              </Suspense>
            }
          />
          <Route path="register" element={<RegisterPage />} />
          <Route path="Footer" element={<LandingPage />} />
          <Route path="admin" element={<LandingPage />} />
          <Route
            path="events"
            element={
              <Suspense fallback={<Loader />}>
                <Events />
              </Suspense>
            }
          />
          <Route path="download" element={<PdfPage />} />
          <Route path="club" element={<ClubCards />} />
        </Routes>
        <AudioButton />
      </div>
    </div>
  );
}
