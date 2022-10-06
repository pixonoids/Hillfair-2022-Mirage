import React, { useState, useEffect } from 'react';
import { MdOutlineMusicNote, MdOutlineMusicOff } from 'react-icons/md';
import './AudioButton.scss';
const useAudio = () => {
  const [audio] = useState(new Audio('/audio/Hillfair_audio_H.wav'));

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

  // use m to mute and unmute // :: functionality :: ONLY WORKING ONCE
  // useEffect(() =>{
  //   document.addEventListener('keydown', detectKey, true)
  // }, []);

  // const detectKey = (e)=>{
  //   if(e.key === 'm'){
  //     setPlaying(!playing);
  //   }
  // }

  return [playing, toggle];
};
const AudioButton = () => {
  const [playing, toggle] = useAudio();
  return (
    <button onClick={toggle} className="audio-button">
      {playing ? <MdOutlineMusicOff /> : <MdOutlineMusicNote />}
    </button>
  );
};

export default AudioButton;
