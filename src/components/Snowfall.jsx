import React, { useEffect, useState } from 'react';
import './Snow.css';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 30 }).map(() => ({
      left: Math.random(),
      size: Math.random(),
      duration: Math.random() * 10 + 5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((flake, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            '--left': flake.left,
            '--size': flake.size,
            '--duration': `${flake.duration}s`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
