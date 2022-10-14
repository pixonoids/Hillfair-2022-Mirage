import React from "react";
import "./AboutMini.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();

let currentTime = new Date();
let hour = currentTime.getHours();

export default function AboutMini() {
  return (
    <div className="aboutmini">
    <img src="/images/elements/tutankhamen.png" alt="tutankhamen" className="tutankhamen"/>
      <div className="aboutmini-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 95 30"
          className="ele elei"
        >
          <path
            fill={hour >= 9 && hour <= 16 ? "#956c4d" : "#723B99"}
            fillRule="evenodd"
            d="M.229 0c19.113 2.098 36.903 8.842 46.99 30C57.515 8.842 75.249 2.099 94.29 0H.23Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div
          className="abouttext"
          style={{
            backgroundColor: hour >= 9 && hour <= 16 ? "#956c4d" : "#723B99",
          }}
        >
          <h1>About</h1>
          <p>
            India is rich in culture and diversity. To celebrate our homeland's
            heritage and culture, every year this fiesta of hilarity and
            hysterics, draws thousands of students to participate in this
            captivating festival. Hill'ffair offers the participants the chance
            to unleash their hidden talents from a plethora of genres ranging
            from creative skills to singing, dancing, acting, and finally
            rocking up the stage with band music and fashion show.{" "}
          </p>
          <button
            style={{
              borderColor: hour >= 9 && hour <= 16 ? "#ffb85c" : "#fff",
            }}
          >
            View More <AiOutlineArrowRight className="icon" />
          </button>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 95 30"
          className="ele"
        >
          <path
            fill={hour >= 9 && hour <= 16 ? "#956c4d" : "#723B99"}
            fillRule="evenodd"
            d="M.229 0c19.113 2.098 36.903 8.842 46.99 30C57.515 8.842 75.249 2.099 94.29 0H.23Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <img src="images/elements/tutankhamen.png" alt="tutankhamen" className="tutankhamen"/>
    </div>
  );
}
