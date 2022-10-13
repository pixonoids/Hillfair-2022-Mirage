import React from "react";
import "./Footer.scss";
import { SocialIcons } from "../../atoms";
import { AiOutlineCopyright } from "react-icons/ai";
import palm1 from '../../../../public/images/elements/palm1.png'
import palm2 from '../../../../public/images/elements/palm2.png'

export default function Footer() {
  return (
    <div className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <SocialIcons/>
      <span className="Copyright">Copyright Hillffair 2022</span>
      <img src={palm1} alt="" className="palm"/>
      <img src={palm2} alt="" className="palm1"/>
    </div>
  );
}
