import React from 'react'
import './PalmRegister.scss'
let currentTime = new Date();
let hour = currentTime.getHours();

const PalmRegister = () =>  {
  return (
    <>
        <img
        src={
          hour >= 6 && hour <= 17
            ? "/images/elements/palm1.png"
            : "/images/elements/palm1purple.png"
        }
        alt=""
        className="palmRegister"
      />
      <img
        src={
          hour >= 6 && hour <= 17
            ? "/images/elements/palm2.png"
            : "/images/elements/palm2purple.png"
        }
        alt=""
        className="palm1Register"
      />
    </>
  )
}
export default PalmRegister;