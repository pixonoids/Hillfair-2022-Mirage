
import React, { useState, useEffect,useRef } from "react";
import "./FlipCountdownTimer.scss";

// function component
const AnimatedCard = ({cardType, animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );

};

// function component
const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};


const CardType = ({ type }) => {
  return (
    <div className={'card-label'}>
      <span>{type}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // to prevent a negative value
  if (unit !== "hours") {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className={"flipUnitContainer"}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
     <CardType type={unit} />
    </div>
  );
};

const FlipClock = function ({ targetDate }) {
  let interval = useRef();

  const [timerDays, setTimerDays] = useState({days:"00",daysShuffle:true});
  const [timerHours, setTimerHours] = useState({hours:"00",hourssShuffle:true});
  const [timerMinutes, setTimerMinutes] = useState({minutes:"00",minutesShuffle:true});
  const [timerSeconds, setTimerSeconds] = useState({seconds:"00",secondShuffle:true});
// console.log(timerDays,timerHours,timerMinutes,timerSeconds)

  const updateTimer = () => {
    const countDownDate = new Date(targetDate).getTime();

    interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft= countDownDate - now;

        const days = Math.floor(timeLeft / (1000*60*60*24)).toString();
        const hours = Math.floor((timeLeft % (1000*60*60*24) / (1000*60*60))).toString();
        const minutes = Math.floor((timeLeft % (1000*60*60) / (1000*60))).toString();
        const seconds = Math.floor((timeLeft % (1000*60) / (1000))).toString();

      if (timeLeft < 0) {
        // stop
        clearInterval(interval.current);
      } else {
        // update
        if (timerDays.days !== days) {
            
          setTimerDays({ days, daysShuffle: !timerDays.daysShuffle });
        }
        if (timerHours.hours !== hours) {

          setTimerHours({ hours, hourssShuffle: !timerHours.hourssShuffle });
        }
        if (timerMinutes.minutes !== minutes) {
          setTimerMinutes({ minutes, minutessShuffle: !timerMinutes.minutesShuffle });
        }
        if (timerSeconds.seconds !== seconds) {
          setTimerSeconds({ seconds, secondShuffle: !timerSeconds.secondShuffle });
  
        }
      }
    }, 1000);
};

  
  
  
useEffect(() => {
  updateTimer();
  return()=> {
      clearInterval(interval.current);
  }
})


  // state object destructuring
  const {
    days,
    daysShuffle
  } = timerDays;
 
  const {
    hours,
    hourssShuffle
  }= timerHours;
  
 const  { minutes,
    minutesShuffle}
    = timerMinutes;
   const { seconds,
    secondShuffle }
    = timerSeconds;


  return (
    <div className={"flipClock"}>
      <FlipUnitContainer unit={"DAYS"} digit={days} shuffle={daysShuffle} />
      <FlipUnitContainer unit={"HOURS"} digit={hours} shuffle={hourssShuffle} />
      <FlipUnitContainer
        unit={"MINUTES"}
        digit={minutes}
        shuffle={minutesShuffle}
      />
      <FlipUnitContainer
        unit={"SECONDS"}
        digit={seconds}
        shuffle={secondShuffle}
      />
    </div>
  );
};

const flipCountDownTimer = () => {
 
 const  targetDate='October 15, 2022 00:00:00'


    return (
        <div id="timer">
      <FlipClock targetDate={targetDate} />
    </div>
  );
};

export default flipCountDownTimer;
