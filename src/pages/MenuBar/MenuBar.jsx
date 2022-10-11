import React from 'react'
import './MenuBar.scss'
import {useState} from 'react';

export default function MenuBar() {
    
    const [isDropped, setIsDropped] = useState(false);
    const handleChange = ()=> {
        console.log('handlechanged');
        setIsDropped(!isDropped);
    }

    return (
        <div classNameName='menubar'>
            <input type="checkbox" id="menuButton" onClick={handleChange}/>
            <label for="menuButton" className='menu-button-label'>
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
