import './GeneralButton.scss';
import React, { useState } from "react";
let currentTime = new Date();
let hour = currentTime.getHours();

const GeneralButton = ({text,type}) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
        <button  type={type}
        className='btn'
        style={{
                backgroundColor:(hour>=6 && hour<=17)?'#7c4730':'#331e66',
                borderColor: hour >= 6 && hour <= 17 ? "#ffb85c" : "#fff",
                backdropFilter: 'blur(20px)'
              }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </button>
    )
}

export default GeneralButton;

