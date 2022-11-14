import './EventPage.scss';
import Data from './data';
import EventCard from '../../components/molecules/eventCards/EventCard';
import { useEffect } from 'react';
let currentTime = new Date();
let hour = currentTime.getHours();

const Event = () => {
        let eventsCovered = 4;
        useEffect(() => {
            window.scrollTo(0, eventsCovered * 210)
        }, [])
    return (
        <div className='timelineContainer'>
            <img className='eye' src='/images/about_eye.png' style={{
                filter: hour >= 6 && hour <= 17 ? 'none' : 'hue-rotate(200deg)'
            }}/>
            <h1>Events</h1>
            <div className='eventPage'>
                {Data.map((data, id) => {
                   return (<EventCard data={data} key={id} anim={id&1 ? "fade-up":"fade-up"}/>)
                })}
            </div>
        </div>
    );
}

export default Event;

