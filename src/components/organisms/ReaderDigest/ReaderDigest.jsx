import React, { useState, useEffect, useCallback } from "react";
import "./ReaderDigest.scss";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();
import { SquareAnimation } from "../../atoms";
import ReactAnime from 'react-animejs'
const { Anime, stagger } = ReactAnime
const ReaderDigest = () => {
  const [newQuote, setnewQuote] = useState("");
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * quote.length);
    setnewQuote(quote[index]);
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 4000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <div className="readerDigest">
      <div className="heading">
        <div className="squareAnimation">
          <SquareAnimation />
        </div>
        Fun Fact</div>
      <Anime
        initial={[
          {
            targets: ".quote",
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 4000,
            loop: true
          },
        ]}
      >
        <div className="quote">{newQuote}</div>
      </Anime>
    </div>
  );
};
const quote = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, reprehenderit.",
  "Lorem Ipsum 2",
  "Lorem Ipsum 3",
  "Lorem Ipsum 4",
  "Lorem Ipsum 5",
  "Lorem Ipsum 6",
  "Lorem Ipsum 7",
  "Lorem Ipsum 8",
];
export default ReaderDigest;
