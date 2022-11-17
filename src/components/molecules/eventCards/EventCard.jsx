import './EventCard.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
let currentTime = new Date();
let hour = currentTime.getHours();

const EventCard = ({ data }) => {
    useEffect(() => {
        AOS.init();
    })
    const [Model, setModel] = useState(false);
    const [TempImgSrc, setTempImgSrc] = useState("");
    const getImg = (src) => {
        setTempImgSrc(src);
        setModel(true);
    };
    return (
        <>
        <div
                className={Model ? "modelE open" : "modelE"}
                onClick={() => setModel(false)}>
                <img src={TempImgSrc} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"> <path fill="none" d="M0 0h24v24H0z" /> <path     d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="white" /></svg>
            </div>
            
        <div className="eventCard" data-aos="fade-down" style={{
            backgroundImage: (hour >= 6 && hour <= 17) ? 'linear-gradient(45deg, #e0c384 10%, #af844c 80%)' : 'linear-gradient(45deg, #723b99 10%, #a697e8 80%)',
            filter: (`${data.eventStatus}` === "Finished") ? 'grayscale(100%)' : 'none',
            animation:  (`${data.eventStatus}` === "Finished") ? 'none' : 'glow 2s ease-in-out infinite',
        }
        }>
     
            <div className='eventCardItem'>
                <h1>{data.event}</h1>
                <h2>{data.club}</h2>
                <p>{data.date}</p>
                <p>{data.eventStatus}</p>
                <p>{data.time}</p>
                <img src={data.image} onClick={()=>getImg(data.image)}></img>
            </div>
            <span className='moon'>{data.moon}</span>
        </div>
         
    </>
    );
}
export default EventCard;