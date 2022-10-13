import './EventCard.scss';  
const EventCard = ({ data }) => {
    return (
        <div className='eventCard'>
            <div className='eventCardItem'>
                <h1>{data.event}</h1>
                <h2>{data.club}</h2>
                <p>{data.date}</p>
                <p>{data.tag}</p>
            </div>
            <span className='moon'>{data.moon}</span>
        </div>
    );
}
export default EventCard;