import React, { useState } from 'react';
import './DayBox.css';

const DayBox = ({ day, movie, onClick, lidClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date().getDate();
  const isLocked = day > today;

  const handleClick = () => {
    if (!isLocked && !isOpen) {
      setIsOpen(true);

            // Delay popup appearance until lid animation completes
      setTimeout(() => {
        onClick(); // Trigger the parent function for movie reveal
      }, 800); // Match this delay to the lid animation duration
      
    }
  };

  return (
    <div className="present-container" onClick={handleClick}>
      {/* Lid of the box */}
      <div
        className={`lid ${lidClass} ${isOpen ? 'open' : ''} ${isLocked ? 'locked' : ''}`}
      />

      {/* Base of the box */}
      <div className="base">
        <div className="inside">
          <span className={`movie-title ${isOpen ? 'show' : ''}`}>
            {isOpen ? movie : day}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DayBox;
