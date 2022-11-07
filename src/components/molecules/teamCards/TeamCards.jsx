import './TeamCards.scss'

const TeamCards = ({ card }) => {
    return (
        <div className='teamm'>
            <div className='card'>
            <img src={card.img} alt="profile" />
            <div className='card-mask'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 45"><path d="M0 .324V45h280V.324c-10.463 15.532-34.172 23.297-57.881 19.15-3.194-.388-6.416-.82-9.647-1.253-28.499-3.82-57.594-7.72-72.472 18.78-14.965-26.392-44.313-22.503-72.97-18.706-3.064.406-6.12.81-9.149 1.178C34.172 23.62 10.463 15.856 0 .324Z" clipRule="evenodd"></path></svg>
                <div className='card-text'>
                    <h1>{card.name}</h1>
                    <p>{card.post}</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TeamCards;