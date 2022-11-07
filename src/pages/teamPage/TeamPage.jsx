import './TeamPage.scss';
import TeamData from './TeamData';
import { useState } from 'react';
import { ClubCards, TeamCards } from '../../components/molecules';
const Team = () => {
    const [isDropped, setIsDropped] = useState(false);
    const handleChange = () => {
        setIsDropped(!isDropped);
    };
    const [isChecked, setisChecked] = useState(false);
    const handleCheck = () => {
        setisChecked(!isChecked);
    };
    const handleInput = () => {
        handleChange();
        handleCheck();
    }
    return (
        <div className='team'>
            <div className='team-menu'>
                <input type="checkbox" id="showTeams" onChange={handleInput} checked={isChecked} />
                <div className={isChecked ? "team-header heightSlide" : "team-header hidden"}>
                    <a href="#faculty">Faculty</a>
                    <a href="#core-team">Core Team</a>
                    <a href="#snc">Secretary & Convener</a>
                </div>
            </div>
            <div className='team-page'>
                <div className='team-inner'>
                    <h1 className='category-heading'>Our Team</h1>
                    <h1 className='category-heading' id='faculty'>Faculty</h1>
                    <div className='team-container'>
                        {(TeamData[0]).map((card, id) => (
                            <TeamCards card={card} key={id} />
                        ))}
                    </div>
                </div>
                <div className='team-inner' id='core-team'>
                    <h1 className='category-heading'>Core Team</h1>
                    <div className='team-container'>
                        {(TeamData[1]).map((card, id) => (
                            <TeamCards card={card} key={id} />
                        ))}
                    </div>
                </div>
                <div className='team-inner' id='snc'>
                    <h1 className='category-heading'>Secretary & Convener</h1>
                    <div className='club-page'>
                    {(TeamData[2]).map((card, id) => (
                                <ClubCards card={card} key={id} />
                            ))}
                </div>
                </div>
            </div>

        </div>

    )
}


export default Team;