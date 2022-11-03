import React from "react";
import "./MenuBar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
let currentTime = new Date();
let hour = currentTime.getHours();
const MenuBar = () => {
  const [isDropped, setIsDropped] = useState(false);
  const handleChange = () => {
    setIsDropped(!isDropped);
  };

  return (
    <div className="menubar">
      <input type="checkbox" id="menuButton" onClick={handleChange} />
      <label htmlFor="menuButton" className="menu-button-label">
        <div className="whiteBar"></div>
        <div className="whiteBar"></div>
        <div className="whiteBar"></div>
        <div className="whiteBar"></div>
      </label>
      <div
        className={isDropped ? "the-bass dropped" : "the-bass"}
        // style={{
        //     backgroundImage:
        //         hour >= 6 && hour <= 16
        //             ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
        //             : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
        // }}
      >
        <div className="rela-block drop-down-container">
        <Link key="/" to="/">
          <div
            className="drop-down-item"
            style={{
              backgroundImage:
                hour >= 6 && hour <= 16
                  ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
                  : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
            }}
          >
            Home
          </div>
          </Link>
        </div>
        <div className="rela-block drop-down-container">
        <Link key='/sponsors' to='/sponsors'>
          <div
            className="drop-down-item
                    "
            style={{
              backgroundImage:
                hour >= 6 && hour <= 16
                  ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
                  : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
            }}
          >
            Sponsors
          </div>
          </Link>
        </div>
        <div className="rela-block drop-down-container">
        <Link key='/team' to='/team'>
          <div
            className="drop-down-item
                    "
            style={{
              backgroundImage:
                hour >= 6 && hour <= 16
                  ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
                  : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
            }}
          >
            Team
          </div>
          </Link>
        </div>
        <div className="rela-block drop-down-container">
        <Link key='/about' to='/about'>
          <div
            className="drop-down-item
                    "
            style={{
              backgroundImage:
                hour >= 6 && hour <= 16
                  ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
                  : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
            }}
          >
            About Us
          </div>
          </Link>
        </div>
        <div className="rela-block drop-down-container">
        <Link key='/events' to='/events'>
          <div
            className="drop-down-item
                    "
            style={{
              backgroundImage:
                hour >= 6 && hour <= 16
                  ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
                  : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
            }}
          >
            Events
          </div>
          </Link>
        </div>
        <div className="rela-block drop-down-container">
        <Link key='/gallery' to='/gallery'>
          <div
            className="drop-down-item
                    "
            style={{
              backgroundImage:
                hour >= 6 && hour <= 16
                  ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
                  : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
            }}
          >
            Gallery
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MenuBar;
