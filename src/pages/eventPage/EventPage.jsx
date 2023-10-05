import './EventPage.scss';
import Data from './data';
import EventCard from '../../components/molecules/eventCards/EventCard';
import { useEffect } from 'react';
import { useState } from 'react';
let currentTime = new Date();
let hour = currentTime.getHours();

const Event = () => {
    let eventsCovered = 4;
    useEffect(() => {
        window.scrollTo(0, eventsCovered * 210)
    }, []);
    const [model, setModel] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    return (
        <>
            <div
                className={model ? "modelE open" : "modelE"}
                onClick={() => setModel(false)}>
                <img src={imgSrc} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"> <path fill="none" d="M0 0h24v24H0z" /> <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="white" /></svg>
            </div>

            <div className='timelineContainer'>
                <img className='eye' src='/images/about_eye.png' style={{
                    filter: hour >= 6 && hour <= 17 ? 'none' : 'hue-rotate(200deg)'
                }} />
                <h1>Events</h1>
                <div className='eventPage'>
                    {Data.map((data, id) => {
                        return (<EventCard data={data} key={id} setImg={setImgSrc} setModel={setModel} />)
                    })}
                </div>
            </div>
        </>
    );
}

export default Event;

