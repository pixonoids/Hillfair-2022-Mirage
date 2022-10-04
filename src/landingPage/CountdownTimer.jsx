import {useEffect, useRef, useState} from 'react';
import './CountdownTimer.scss';

const CountdownTimer = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('October 15, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft= countDownDate - now;

            const days = Math.floor(timeLeft / (1000*60*60*24));
            const hours = Math.floor((timeLeft % (1000*60*60*24) / (1000*60*60)));
            const minutes = Math.floor((timeLeft % (1000*60*60) / (1000*60)));
            const seconds = Math.floor((timeLeft % (1000*60) / (1000)));

            if (timeLeft < 0) {
                // stop
                clearInterval(interval.current);
            }else{
                // update
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return()=> {
            clearInterval(interval.current);
        }
    })

    return (
        <div className="timer-container">
            <div className="timer-inner-container">
                <div className="time days">{timerDays}</div>
                <p className='time-tag'>Days</p>
            </div>
            <span>:</span>
            <div className="timer-inner-container">
                <div className="time hours">{timerHours}</div>
                <p className='time-tag'>Hours</p>
            </div>
            <span>:</span>
            <div className="timer-inner-container">
                <div className="time minutes">{timerMinutes}</div>
                <p className='time-tag'>Minutes</p>
            </div>
            <span>:</span>
            <div className="timer-inner-container">
                <div className="time seconds">{timerSeconds}</div>
                <p className='time-tag'>Seconds</p>
            </div>
        </div>
    );
}

export default CountdownTimer;