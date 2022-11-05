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
  import { Loader } from "../../components/atoms";
import { useEffect } from "react";


export default function Home() {

  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (

    <>
      {Loading ? (<Loader/>) : (
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
