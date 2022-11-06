import React, { useState, useEffect } from 'react';
import { MdOutlineMusicNote, MdOutlineMusicOff } from 'react-icons/md';
import './AudioButton.scss';
let currentTime = new Date();
let hour = currentTime.getHours();
const useAudio = () => {
  const [audio] = useState(new Audio('/audio/theme-song.mp4'));

  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.pause() : audio.play();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
    return () => {
      audio.pause();
    };
  }, []);


  return [playing, toggle];
};
const AudioButton = () => {
  const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    
  const [playing, toggle] = useAudio();
  return (
    <button onClick={toggle} className="audio-button"
    // style={{
    //   backgroundColor:(isHovering && hour <= 6 && hour >= 17) ? "#6c3e2b" : "#A697E8",
    // }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {playing ? <MdOutlineMusicOff /> : <MdOutlineMusicNote />}
    </button>
  );
};

export default AudioButton;
