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
        src="/public/images/finalsunlayer.png"
        style={{ transform: `translateY(${-valueScn * 0.04}px)` }}
        alt="hello"
      ></img>
      <img
        className="layers"
        src="/public/images/cloudslayerfinal-01.png"
        style={{ transform: `translateY(${-valueScn * 0.04}px)` }}
        alt="hello"
      ></img>
      <img
        className="layers"
        src="/public/images/sandlayer-01.png"
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
      </div>
      {/* <div className="text">
        <span>Hill'ffair 2K22</span>
        <p className="theme">Mirage: Oasis of Mystique</p>
        <p className="dates">11 Nov - 13 Nov</p>
        <button>Register Now</button>
      </div> */}
    </div>
  );
};

export default HomeMain;
