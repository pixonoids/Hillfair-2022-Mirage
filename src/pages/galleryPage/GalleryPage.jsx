import React from 'react'
import './GalleryPage.scss';
import galleryData from './galleryData.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
const GalleryPage = () => {
  const isPhone = useMediaQuery({
    query: "(max-width: 600px)"
  });

  const [Model, setModel] = useState(false);
  const [TempImgSrc, setTempImgSrc] = useState('');
  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  }

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
  const [Coords, setCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft - 500,
      y: event.clientY - event.target.offsetTop - 500,
    });
  };


  return (
    <div className='gallery'>
      <div className="heading">OUR GALLERY</div>
      <div className={Model ? "model open" : "model"} onClick={() => setModel(false)}>
          <img src={TempImgSrc}/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill='white' /></svg>
        </div>
      <div className="row" onMouseMove={handleMouseMove}
      style={{
        translate: `-${globalCoords.x / 50 - 10}px -${globalCoords.y / 50}px`,
        transition:"translate 0.1s"
      }}>
        <div className="column" style={{
          animation: Model || isPhone ? "none" : "moveup 8s ease-in-out infinite alternate",
        }}>
          {galleryData.map((data, id) => {
            return (data.src1) ? (<img src={data.src1} key = {id} style={{ width: "100%" }} onClick={() => getImg(data.src1)} />) : (<img style={{display:"none"}}/>);
          })}
        </div>

        <div className="column" style={{
          animation: Model || isPhone ? "none" : "movedown 8s ease-in-out infinite alternate"
        }}>
          {galleryData.map((data, id) => {
            return (data.src2)  ? (<img src={data.src2} key = {id} style={{ width: "100%" }} onClick={() => getImg(data.src2)} />) : (<img style={{display:"none"}}/>);
          })}
        </div>

        <div className="column" style={{
          animation: Model || isPhone ? "none" : "moveup 8s ease-in-out infinite alternate"
        }}>
          {galleryData.map((data, id) => {
            return (data.src3) ? (<img src={data.src3} key = {id} style={{ width: "100%" }} onClick={() => getImg(data.src3)} />) : (<img style={{display:"none"}}/>);
          })}
        </div>

        <div className="column" style={{
          animation: Model || isPhone? "none" : "movedown 8s ease-in-out infinite alternate"
        }}>
          {galleryData.map((data, id) => {
            return (data.src4) ? (<img src={data.src4} key = {id} style={{ width: "100%" }} onClick={() => getImg(data.src4)} />) : (<img style={{display:"none"}}/>);
          })}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage;