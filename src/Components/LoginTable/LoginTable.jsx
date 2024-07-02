import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginTable.css'; 
import doorVideo from '../Background/door.webm'; 

const LoginTable = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { account, password } = e.target.elements;
    if (password.value !== '3011106' || account.value !== 'Dinh My Tam') {
      setErrorMessage('Thông tin không chính xác');
      return;
    }
    setIsLoggedIn(true);
    setIsZooming(true);
    setTimeout(() => {
      setIsZooming(false);
    }, 1000); // Duration of the door video
  };

  useEffect(() => {
    if (isLoggedIn) {
      const video = document.getElementById('doorVideo');
      video.play();
      setTimeout(() => {
        video.classList.add('zooming');
        setTimeout(() => {
          navigate('/story');
        }, 2000); // Time for the zoom effect and white filter to complete
      }, 1000); // Start the zoom effect after the video plays for 1 second
    }
  }, [isLoggedIn, navigate]);

  return (
    <div id="dialog" className={`login-container ${isZooming ? 'black-background' : ''}`}>
      {isLoggedIn ? (
        <video id="doorVideo" className="door-video" src={doorVideo} autoPlay muted />
      ) : (
        <>
          {isVisible ? (
            <div className="login-table">
              <button className="close" onClick={handleToggle}>×</button>
              <h2 className="title">Love You So Much</h2>
              <form onSubmit={handleLogin}>
                <div>
                  <input className="input" type="text" name="account" placeholder="Enter Username" required />
                </div>
                <div>
                  <input className="input" type="password" name="password" placeholder="Enter Password" required />
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <button className="login" type="submit">Log in</button>
              </form>
            </div>
          ) : (
            <button className="join-button" onClick={handleToggle}>Join Here</button>
          )}
        </>
      )}
    </div>
  );
};

export default LoginTable;
