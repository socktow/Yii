import React, { useState, useEffect } from 'react';
import './Story.css'; // Import the CSS file
import voice from './voice.ogg'; 
import backgroundGif from './background.gif'; // Import the background GIF
import Quest from '../Quest/Quest';

const Story = () => {
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const audio = new Audio(voice);
      audio.play();
      setIsVoicePlaying(true);
      audio.onended = () => {
        setIsVoicePlaying(false);
        setShowBackground(true); // Hiển thị background sau khi âm thanh kết thúc
      };
    }, 2000);

    return () => clearTimeout(timer); // Xóa timer khi component unmount
  }, []);

  return (
    <div className={`story-container ${showBackground ? 'show' : ''}`}>
      {showBackground && (
        <img src={backgroundGif} className="background-gif" alt="Background GIF" />
      )}
      <div className="Quest">
        {showBackground && <Quest />}
      </div>
    </div>
  );
};

export default Story;
