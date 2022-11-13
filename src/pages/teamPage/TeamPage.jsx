import "./TeamPage.scss";
import TeamData from "./TeamData";
import { useState } from "react";
import { ClubCards, ClubCardsD, TeamCards } from "../../components/molecules";

import React, { useRef, useEffect } from "react";

let currentTime = new Date();
let hour = currentTime.getHours();
/**
 * Hook that alerts clicks outside of the passed ref
 */

const Team = () => {
  const [isChecked, setisChecked] = useState(false);
  const handleCheck = () => {
    setisChecked(!isChecked);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setisChecked(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="team">
      <div className="team-menu" ref={wrapperRef}>
        <label onClick={handleCheck}>Category</label>
        <div
          className={isChecked ? "team-header" : "team-header hidden"}
          style={{
            backgroundImage:
              hour >= 6 && hour <= 17
                ? "linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)"
                : "linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)",
          }}
        >
          <a href="#faculty" onClick={handleCheck}>
            Faculty
          </a>
          <a href="#core-team" onClick={handleCheck}>
            Core Team
          </a>
          <a href="#snc" onClick={handleCheck}>
            Secretary & Convener
          </a>
        </div>
      </div>
      <div className="team-page">
        <div className="team-inner">
          <h1 className="category-heading our-team">Our Team</h1>
          <h1 className="category-heading" id="faculty">
            Faculty
          </h1>
          <div className="team-container">
            {TeamData[0].map((card, id) => (
              <TeamCards card={card} key={id} />
            ))}
          </div>
        </div>
        <div className="team-inner" id="core-team">
          <h1 className="category-heading">Core Team No</h1>
          <div className="team-container">
            {TeamData[1].map((card, id) => (
              <TeamCards card={card} key={id} />
            ))}
          </div>
        </div>
        <div className="team-inner" id="snc">
          <h1 className="category-heading">Secretaries & Conveners</h1>
          <div className="club-page">
            {TeamData[2].map((card, id) => (
              <ClubCards card={card} key={id} />
            ))}
            <ClubCardsD card={TeamData[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
