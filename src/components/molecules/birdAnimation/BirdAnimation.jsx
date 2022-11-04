import React from 'react';
import './BirdAnimation.scss';

const BirdAnimation =() => {
  return (
    <div className="Birdcontainer">
		
        <div className="bird-container bird-container--one">
            <div className="bird bird--one"></div>
        </div>
        
        <div className="bird-container bird-container--two">
            <div className="bird bird--two"></div>
        </div>
        
        <div className="bird-container bird-container--three">
            <div className="bird bird--three"></div>
        </div>
        
        <div className="bird-container bird-container--four">
            <div className="bird bird--four"></div>
        </div>
        
    </div>
  )
}
export default BirdAnimation;
