import React from "react";
import "./Footer.scss";
import { SocialIcons } from "../../atoms";
import { AiOutlineCopyright } from "react-icons/ai";
let currentTime = new Date();
let hour = currentTime.getHours();

export default function Footer() {
  return (
    <div className="footer" style={{
      background:
              (hour >= 6 && hour <= 17)
                ? '#6c3e2b'
                : '#A697E8',
    }}>
      <div className="waves">
        <div
          className="wave"
          id="wave1"
          style={{
            backgroundImage:
              (hour >= 6 && hour <= 17)
                ? "url(/images/wave.png)"
                : "url(/images/elements/wavepurple.png)",
          }}
        ></div>
        <div
          className="wave"
          id="wave2"
          style={{
            backgroundImage:
              (hour >= 6 && hour <= 17)
                ? "url(/images/wave.png)"
                : "url(/images/elements/wavepurple.png)",
          }}
        ></div>
        <div
          className="wave"
          id="wave3"
          style={{
            backgroundImage:
              (hour >= 6 && hour <= 17)
                ? "url(/images/wave.png)"
                : "url(/images/elements/wavepurple.png)",
          }}
        ></div>
        <div
          className="wave"
          id="wave4"
          style={{
            backgroundImage:
              (hour >= 6 && hour <= 17)
                ? "url(/images/wave.png)"
                : "url(/images/elements/wavepurple.png)",
          }}
        ></div>
      </div>
      <SocialIcons />
      <span className="Copyright">Copyright Hillffair 2022</span>
      <img
        src={
          hour >= 6 && hour <= 17
            ? "images/elements/palm1.png"
            : "images/elements/palm1purple.png"
        }
        alt=""
        className="palm"
      />
      <img
        src={
          hour >= 6 && hour <= 17
            ? "images/elements/palm2.png"
            : "images/elements/palm2purple.png"
        }
        alt=""
        className="palm1"
      />
    </div>
  );
}
