import './EventPage.scss';
import Data from './data';
import EventCard from '../../components/molecules/eventCards/EventCard';


const Event = () => {
    return (
        <div className='timelineContainer'>
            <h1>Events</h1>
            <div className='eventPage'>
                {Data.map((data, id) => (
                    <EventCard data={data} key={id} />
                ))}
            </div>
        </div>
    );
}

export default Event;

