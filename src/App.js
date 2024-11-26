import React, { useState } from 'react';
import CalendarGrid from './components/CalendarGrid';
import MoviePopup from './components/MoviePopup';
import Snowfall from './components/Snowfall';
import movies from './data/movies.json';
import './App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleDayClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <Snowfall />
      <h1>🎄 Advent Calendar 🎅</h1>
      <p>Click each day to reveal a Christmas movie!</p>
      <CalendarGrid movies={movies} onDayClick={handleDayClick} />
      <MoviePopup movie={selectedMovie} onClose={closePopup} />
      <Footer />
    </div>
  );
}

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Antonio Teran. All rights reserved.</p>
    <p>Made with ❤️ by Antonio Teran.</p>
  </footer>
);

export default App;
