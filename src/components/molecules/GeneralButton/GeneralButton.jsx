import './GeneralButton.scss';
import React, { useState } from "react";
let currentTime = new Date();
let hour = currentTime.getHours();

const GeneralButton = ({text}) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
        <button 
        className='btn'
        style={{
                borderColor: hour >= 9 && hour <= 16 ? "#ffb85c" : "#fff",
                backgroundColor:(hour>=9 && hour<=16 && isHovering)?'#7c4730':''
              }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </button>
    )
}

export default GeneralButton;

