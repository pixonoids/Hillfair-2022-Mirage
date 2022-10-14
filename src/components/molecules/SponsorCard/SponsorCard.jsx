import './SponsorCard.scss';

const SponsorCard = (props)=> {

    // console.log(props.img);

    return (
        <div className="sponsor-card">
            <img src={props.img} alt="sponsor" className='sponsor-img'/>
        </div>
    )
}

export default SponsorCard;