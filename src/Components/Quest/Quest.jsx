import React from 'react';
import './Quest.css'; // Import the CSS file
import background from '../../assets/bg.png';
import image33 from '../../assets/Group 33.png';
import paimon from '../../assets/paimon 1.png';
import { List } from '../List/List';

const Quest = () => {
  return (
    <div className="quest-container">
      <img src={background} className="background-image" alt="Background" />
      <img src={image33} className="overlay-image" alt="Overlay" />
      <img src={paimon} className="paimon" alt="Paimon" />
      <div className="QuestHub">
        <List />
      </div>
    </div>
  );
};

export default Quest;
