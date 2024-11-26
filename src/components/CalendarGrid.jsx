import React from 'react';
import DayBox from './DayBox';
import './CalendarGrid.css';

const CalendarGrid = ({ movies, onDayClick }) => {
  return (
    <div className="calendar-grid">
      {movies.map((movie, index) => (
        <DayBox
          key={movie.day}
          day={movie.day}
          movie={movie.title}
          lidClass={`image-${index + 1}`} // Dynamically assign image class for all 24 days
          onClick={() => onDayClick(movie)}
        />
      ))}
    </div>
  );
};

export default CalendarGrid;
