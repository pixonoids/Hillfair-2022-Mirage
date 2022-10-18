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
        <div>
        <button 
        className='btn'
          style={{
            borderColor: hour >= 9 && hour <= 16 ? "#ffb85c" : "#fff",
            backgroundColor:(hour>=6 && hour<=24 && isHovering)?'#7c4730':'transparent'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </button>
      </div>
    )
}

export default GeneralButton;