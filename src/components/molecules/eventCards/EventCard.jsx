import './EventCard.scss';

const EventCard = ({ data }) => {
    return (
        <div className='eventCard'>
            <div className='eventCardItem'>
                <h1>{data.event}</h1>
                <h2>{data.club}</h2>
                <h1>{data.date}</h1>
                <p>{data.tag}</p>
            </div>
            <span className='circle'></span>
        </div>
    );
}
export default EventCard;