import './EventPage.scss';
import Data from './data';
import EventCard from '../../components/molecules/eventCards/EventCard';
import AOS from 'aos';       
import 'aos/dist/aos.css';    


const Event = () => {
    
    return (
        <div className='timelineContainer'>
            <h1>Events</h1>
            <div className='eventPage'>
                {Data.map((data, id) => {
                    console.log(id)
                   return (<EventCard data={data} key={id} anim={id&1 ? "fade-up":"fade-up"}/>)
                })}
            </div>
        </div>
    );
}

export default Event;

