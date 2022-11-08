import './TeamPage.scss';
import TeamData from './TeamData';
import { useState } from 'react';
import { ClubCards, TeamCards } from '../../components/molecules';

import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */


const Team = () => {
    const [isChecked, setisChecked] = useState(false);
    const handleCheck = () => {
        setisChecked(!isChecked);
    };
    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setisChecked(false);
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className='team' >
            <div className='team-menu'>
                <label onClick={handleCheck} ref={wrapperRef}>Category</label>
                <div className={isChecked ? "team-header heightSlide" : "team-header hidden"}>
                    <a href="#faculty" onClick={handleCheck}>Faculty</a>
                    <a href="#core-team" onClick={handleCheck}>Core Team</a>
                    <a href="#snc" onClick={handleCheck}>Secretary & Convener</a>
                </div>
            </div>
            <div className='team-page'>
                <div className='team-inner'>
                    <h1 className='category-heading our-team'>Our Team</h1>
                    <h1 className='category-heading' id='faculty'>Faculty</h1>
                    <div className='team-container'>
                        {(TeamData[0]).map((card, id) => (
                            <TeamCards card={card} key={id} />
                        ))}
                    </div>
                </div>
                <div className='team-inner' id='core-team'>
                    <h1 className='category-heading'>Core Team</h1>
                    <div className='team-container'>
                        {(TeamData[1]).map((card, id) => (
                            <TeamCards card={card} key={id} />
                        ))}
                    </div>
                </div>
                <div className='team-inner' id='snc'>
                    <h1 className='category-heading'>Secretary & Convener</h1>
                    <div className='club-page'>
                    {(TeamData[2]).map((card, id) => (
                                <ClubCards card={card} key={id} />
                            ))}
                </div>
                </div>
            </div>

        </div>

    )
}


export default Team;