import './SponsorCard.scss';

const SponsorCard = (props)=> {


    return (
        <div className="sponsor-card">
            <img src={props.img} alt="sponsor" className='sponsor-img'/>
        </div>
    )
}

export default SponsorCard;