import React from "react";
import "./Footer.scss";
import { SocialIcons } from "../../atoms";
import { AiOutlineCopyright } from "react-icons/ai";

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
    </div>
  );
}
