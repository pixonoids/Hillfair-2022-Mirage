import React,{useState} from "react";
import "./HomeMain.scss";
import ParticlesBackground from "../../../pages/landingPage/ParticlesBackground";



const HomeMain = () => {
  const [valueScn, setValueScn] = useState('0');
  window.addEventListener('scroll', () => {
    setValueScn(window.scrollY);
  });
  const [offset, setOffset] = useState('0');
  let currentTime = new Date();
  let hour = currentTime.getHours();
  const [hours,setHours]=useState(hour)

  return (
    <div className="homeMain"
    style={{
      backgroundImage:(hours>=9&&hours<=16)?'linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)':' linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'   
       }}
    >
     <ParticlesBackground
    className="stars"
      />
      <img
        className="layers"
        src={(hours>=6&& hours<=16)?"/public/images/sunlayerfinal-01.png":"/public/images/darkmodesunlayer.png"}
        style={{ transform: `translateY(${-valueScn * 0.04}px)` }}
        alt="hello"
      ></img>
      <img
        className="layers"
        src={(hours>=6&& hours<=16)?"/public/images/cloudslayerfinal-01.png":"/public/images/darkmodecloudlayer.png"}
        style={{ transform: `translateY(${-valueScn * 0.04}px)`}}
        alt="hello"
      ></img>
      <img
        className="layers"
        src={(hours>=6&& hours<=16)?"/public/images/sandlayer-01.png":"/public/images/darkmodesand.png"}
        style={{ transform: `translateY(${-valueScn * 0.02}px)` }}
        alt="hello"
      ></img>
      <div className="header-text">
        <div className="heading">
          <h1>Hill'ffair 2k22</h1>
          <h3>Mirage: Oasis of Mystique</h3>
          {/* <Link key="/register" to="/register">
            <HillffairButton btnText="register here"></HillffairButton>
          </Link> */}
        </div>
        <div className="dates">
          <h1>11-13</h1>
          <h3>November 2022</h3>
        </div>
        <div className="logos">
          <div className="img-div">
            <a href="https://nith.ac.in/" target="_blank">
              <img src="/public/images/nith.png" className="nithlogo"></img>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/pixonoids/" target="_blank">
              <img src="/public/images/pixonoids_logo.png" className="pixologo"></img>
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default HomeMain;
