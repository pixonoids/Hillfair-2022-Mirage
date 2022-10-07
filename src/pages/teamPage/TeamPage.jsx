import './TeamPage.scss';
import TeamCards from '../../components/molecules/teamCards/TeamCards';
import { useState } from 'react';

const Team = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            "name": "Adam Mackie",
            "post": "Co-ordinator",
            "person_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis vel odio nec semper. Cras eu dolor eu magna bibendum posuere. Vivamus nec eleifend lorem.",
            "img": '../../../public/images/sample-profile-picture.jpg'
        },
        {
            id: 2,
            "name": "Emma Watson",
            "post": "Secretary",
            "person_details": "Emm ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis vel odio nec semper. Cras eu dolor eu magna bibendum posuere. Vivamus nec eleifend lorem.",
            "img": '../../../public/images/sample-profile-picture.png'
        },
        {
            id: 3,
            "name": "David",
            "post": "Vice President",
            "person_details": "Ma ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis vel odio nec semper. Cras eu dolor eu magna bibendum posuere. Vivamus nec eleifend lorem.",
            "img": '../../../public/images/sample-profile.png'
        }
    
    ])
    return (
        <div className='team-container'> 
            {cards.map((card) => (
                <TeamCards card = {card} />
            ))}
        </div>
    )
}


export default Team;