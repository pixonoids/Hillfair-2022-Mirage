import React from 'react'
import './GalleryPage.scss';
import galleryData from './galleryData.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
const GalleryPage = () => {

    const [Model, setModel] = useState(false);
    const [TempImgSrc, setTempImgSrc] = useState('');
    const getImg = (src) => {
        setTempImgSrc(src);
        setModel(true);
    }


  return (
    <div className='gallery'>
    <div className="heading">OUR GALLERY</div>
    <div className="row"> 
    <div className={Model ? "model open" : "model"}>
        <img src={TempImgSrc}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" onClick={() => setModel(false)}><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill='white' /></svg>
    </div>
        <div className="column">
        {galleryData.map((data, id) => {
                   return (<img src={data.src} style={{width:"100%"}} onClick={() => getImg(data.src)}/>)
                })}
        </div>

        <div className="column">
        {galleryData.map((data, id) => {
                   return (<img src={data.src} style={{width:"100%"}} onClick={() => getImg(data.src)}/>)
                })}
        </div> 

        <div className="column">
        {galleryData.map((data, id) => {
                   return (<img src={data.src} style={{width:"100%"}} onClick={() => getImg(data.src)}/>)
                })}
        </div>

        <div className="column">
        {galleryData.map((data, id) => {
                   return (<img src={data.src} style={{width:"100%"}} onClick={() => getImg(data.src)}/>)
                })}
        </div>
    </div>
    </div>
  )
}

export default GalleryPage;