import React, { useState, useEffect, useCallback } from "react";
import "./ReaderDigest.scss";

const ReaderDigest = () => {
  const [newQuote, setnewQuote] = useState("");
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * quote.length);
    setnewQuote(quote[index]);
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <div className="readerDigest">
      <div className="heading">Fun Fact</div>
      <div className="quote">{newQuote}</div>
    </div>
  );
};
const quote = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, reprehenderit.",
  // "Lorem Ipsum 2",
  // "Lorem Ipsum 3",
  // "Lorem Ipsum 4",
  // "Lorem Ipsum 5",
  // "Lorem Ipsum 6",
  // "Lorem Ipsum 7",
  // "Lorem Ipsum 8",
];
export default ReaderDigest;
