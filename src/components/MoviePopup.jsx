import React from 'react';
import './MoviePopup.css';

const MoviePopup = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="movie-popup">
      <div className="popup-content">
        <button className="close-popup" onClick={onClose}>X</button>
        <img
          className="movie-image"
          src={movie.image}
          alt={movie.title}
        />
        <div className="movie-details">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-platforms">
            <h3>Available On:</h3>
            <ul>
              {movie.platforms.map((platform, index) => (
                <li key={index}>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
