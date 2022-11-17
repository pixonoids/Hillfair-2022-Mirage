import './EventCard.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
let currentTime = new Date();
let hour = currentTime.getHours();

const EventCard = ({ data,setModel,setImg }) => {
    useEffect(() => {
        AOS.init();
    });
    const getImg = (src) => {
        setImg(src);
        setModel(true);

    };
    return (
        <>

            <div className="eventCard" data-aos="fade-down" style={{
                backgroundImage: (hour >= 6 && hour <= 17) ? 'linear-gradient(45deg, #e0c384 10%, #af844c 80%)' : 'linear-gradient(45deg, #723b99 10%, #a697e8 80%)',
                filter: (`${data.eventStatus}` === "Finished") ? 'grayscale(100%)' : 'none',
                animation: (`${data.eventStatus}` === "Finished") ? 'none' : 'glow 2s ease-in-out infinite',
            }
            }>
                <div className='eventCardItem'>
                    <h1>{data.event}</h1>
                    <h2>{data.club}</h2>
                    <p>{data.date}</p>
                    <p>{data.eventStatus}</p>
                    <p>{data.time}</p>
                    <img src={data.image} onClick={() => getImg(data.image)}></img>
                </div>
                <span className='moon'>{data.moon}</span>
            </div>
        </>
    );
}
export default EventCard;