import React from 'react'
import './MenuBar.scss'
import {useState} from 'react';

const MenuBar = () => {
    
    const [isDropped, setIsDropped] = useState(false);
    const handleChange = ()=> {
        setIsDropped(!isDropped);
    }

    return (
        <div className='menubar'>
            <input type="checkbox" id="menuButton" onClick={handleChange}/>
            <label htmlFor="menuButton" className='menu-button-label'>
                <div className="whiteBar"></div>
                <div className="whiteBar"></div>
                <div className="whiteBar"></div>
                <div className="whiteBar"></div>
            </label>
            <div className={isDropped ? 'the-bass dropped' : 'the-bass'}>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item">Home</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item">Sponsors</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item">Team</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item">About Us</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item">Events</div>
                </div>
                <div className="rela-block drop-down-container">
                    <div className="drop-down-item">Gallery</div>
                </div>
            </div>
        </div>
    )
}
export default MenuBar;