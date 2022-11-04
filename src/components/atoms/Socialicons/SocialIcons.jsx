import React from "react";
import { useState } from "react";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import "./SocialIcons.scss";
let currentTime = new Date();
let hour = currentTime.getHours();
export default function () {
  const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
  return (
    <div className="socialicons">
      <ul className="glowingIcons">
        <li>
          <a href="https://www.instagram.com/hillffair_nith/" target="_blank"
          // style={{
          //       border: (hour>=9 && hour<=16 && isHovering)? "2px solid #8F663C" : "",
          //       color:((hour>=9 && hour<=16) && isHovering)?"#8F663C":"",
          //     }}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          >
        
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/hillffair" target="_blank"
          // style={{
          //       border: (hour>=9 && hour<=16 && isHovering)? "2px solid #7c4730" : "",
          //       color:((hour>=9 && hour<=16) && isHovering)?"#7c4730":"",
          //     }}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC1Dui20MXzSfiyFB97yCElQ"
            target="_blank"
          //   style={{
          //       border: (hour>=9 && hour<=16 && isHovering)? "2px solid #7c4730" : "",
          //       color:((hour>=9 && hour<=16) && isHovering)?"#7c4730":"",
          //     }}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          >
            <BsYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
}
