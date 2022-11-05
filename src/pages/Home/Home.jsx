import React,{useState} from "react";
import {
  HomeMain,
  AboutMini,
  Contact,
  Footer,
  ReaderDigest,
  Newsletter,
} from "../../components/organisms";
import {BirdAnimation} from '../../components/molecules'
import "./Home.scss";


export default function Home() {
  return (

    <div className="home"
    >
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
  );
}
