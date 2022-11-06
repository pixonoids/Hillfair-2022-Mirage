import React, { useState } from "react";
import {
  HomeMain,
  AboutMini,
  Contact,
  Footer,
  ReaderDigest,
  Newsletter,
} from "../../components/organisms";
import { BirdAnimation } from "../../components/molecules";
import "./Home.scss";
import { Loader } from "../../components/atoms";
import { useEffect } from "react";

export default function Home() {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(true);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <>
      {!Loading ? (
        <Loader />
      ) : (
        <div className="home">
          <BirdAnimation />
          <HomeMain />
          <AboutMini />
          <div className="funFactNewsletter">
            <ReaderDigest />
            <Newsletter />
          </div>
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
