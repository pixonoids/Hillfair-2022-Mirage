import React from 'react';
import './ClubCards.scss'
import TeamCards from './TeamCards';

function ClubCardsD({ card }) {
    return (
        <div className='club-card'>
            <div className='col-d'>
                <div className='new-card'><TeamCards card={card[1]} /></div>
                <div className='new-card'><TeamCards card={card[2]} /></div>
                <div className='new-card'><TeamCards card={card[3]} /></div>
            </div>
            <div className='club-name'>{card[0].club}</div>
        </div>
    )
}

export default ClubCardsD;