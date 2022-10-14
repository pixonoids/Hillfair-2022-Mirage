import React,{useState} from "react";
import {
  HomeMain,
  AboutMini,
  Contact,
  Footer,
  ReaderDigest,
  Newsletter,
} from "../../components/organisms";
import "./Home.scss";

// const [hours,setHours]=useState(hour)

export default function Home() {
  return (

    <div className="home"
    >
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
