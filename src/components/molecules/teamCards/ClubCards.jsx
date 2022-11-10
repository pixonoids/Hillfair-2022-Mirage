import React from 'react';
import './ClubCards.scss'
import TeamCards from './TeamCards';

function ClubCards({ card }) {
    return (
        <div className='club-card'>
            <div className='col'>
                <div className='new-card'><TeamCards card={card[1]} /></div>
                <div className='new-card'><TeamCards card={card[2]} /></div>
            </div>
            <div className='club-name'>{card[0].club}</div>
        </div>
    )
}

export default ClubCards;