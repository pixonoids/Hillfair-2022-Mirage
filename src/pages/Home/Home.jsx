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

let currentTime = new Date();
let hour = currentTime.getHours();
// const [hours,setHours]=useState(hour)

export default function Home() {
  return (
    <div className="home"
    style={{
          backgroundImage:(hour>=6&&hour<=16)?'linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)':'linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'
        }}
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
