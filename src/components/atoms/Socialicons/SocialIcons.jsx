import React from "react";
import { useState } from "react";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { CgListTree } from "react-icons/cg";
import "./SocialIcons.scss";
let currentTime = new Date();
let hour = currentTime.getHours();
export default function () {
  return (
    <div className="socialicons">
      <ul className="glowingIcons">
        <li>
          <a href="https://www.instagram.com/hillffair_nith/" target="_blank"
          >
        
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/hillffair" target="_blank"
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC1Dui20MXzSfiyFB97yCElQ"
            target="_blank"
          >
            <BsYoutube />
          </a>
        </li>
        <li>
          <a href="https://linktr.ee/hillffair_nith" target="_blank"
          >
        
            <CgListTree />
          </a>
        </li>
      </ul>
    </div>
  );
}
