import React from 'react';
import BackgroundVideo from './scaled_loop.mp4'; 

const Background = () => {
  return (
    <div className="background-container">
      <video autoPlay loop muted className="background-video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
