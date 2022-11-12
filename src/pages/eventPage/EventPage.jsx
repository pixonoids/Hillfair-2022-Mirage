import './EventPage.scss';
import Data from './data';
import EventCard from '../../components/molecules/eventCards/EventCard';
import { useEffect } from 'react';


const Event = () => {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    return (
        <div className='timelineContainer'>
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

