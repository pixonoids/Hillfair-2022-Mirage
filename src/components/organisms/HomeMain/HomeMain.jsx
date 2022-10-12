import React,{useState} from "react";
import "./HomeMain.scss";
const HomeMain = () => {
  const [valueScn, setValueScn] = useState('0');
  window.addEventListener('scroll', () => {
    setValueScn(window.scrollY);
  });
  const [offset, setOffset] = useState('0');
  return (
    <div className="homeMain">
      <img
        className="layers"
        src="/public/images/sunlayer-01.png"
        style={{ transform: `translateY(${-valueScn * 0.3}px)` }}
        alt="hello"
      ></img>
      <img
        className="layers"
        src="/public/images/cloudslayer.png"
        style={{ transform: `translateY(${-valueScn * 0.2}px)` }}
        alt="hello"
      ></img>
      <img
        className="layers"
        src="/public/images/sandlayer-01.png"
        style={{ transform: `translateY(${-valueScn * 0.1}px)` }}
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
              <img src="/public/images/pixonoids_logo_color.png" className="pixologo"></img>
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default HomeMain;
