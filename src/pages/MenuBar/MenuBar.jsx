import React from 'react'
import './MenuBar.scss'
import { useState } from 'react';
let currentTime = new Date();
let hour = currentTime.getHours();
const MenuBar = () => {

    const [isDropped, setIsDropped] = useState(false);
    const handleChange = () => {
        setIsDropped(!isDropped);
    }

    return (
        <div className='menubar'>
            <input type="checkbox" id="menuButton" onClick={handleChange} />
            <label htmlFor="menuButton" className='menu-button-label'>
                <div className="whiteBar"></div>
                <div className="whiteBar"></div>
                <div className="whiteBar"></div>
                <div className="whiteBar"></div>
            </label>
            <div className={isDropped ? 'the-bass dropped' : 'the-bass'}
                style={{
                    backgroundImage:
                        hour >= 6 && hour <= 16
                            ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
                            : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
                }}>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item" style={{
                        backgroundImage:
                            hour >= 6 && hour <= 16
                                ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
                                : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
                    }}>Home</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item
                    "style={{
        backgroundImage:
          hour >= 6 && hour <= 16
            ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
            : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
      }}>Sponsors</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item
                    "style={{
        backgroundImage:
          hour >= 6 && hour <= 16
            ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
            : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
      }}>Team</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item
                    "style={{
        backgroundImage:
          hour >= 6 && hour <= 16
            ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
            : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
      }}>About Us</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item
                    "style={{
        backgroundImage:
          hour >= 6 && hour <= 16
            ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
            : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
      }}>Events</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item
                    "style={{
        backgroundImage:
          hour >= 6 && hour <= 16
            ? "linear-gradient(180deg,#40291c 17.15%,#522822 120.7%)"
            : " linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
      }}>Gallery</div>
                </div>
            </div>
        </div>
    )
}
export default MenuBar;