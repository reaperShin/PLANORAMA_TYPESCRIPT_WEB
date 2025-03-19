import React, { useState, useEffect } from 'react';
import './dashboard.css';
import EventImage1 from './Birthday.avif';
import EventImage2 from './Engagement.avif';
import EventImage3 from './Marriage.avif';
import EventImage4 from './Reunion.avif';

const Web: React.FC = () => {
  const events = [
    { title: "Jordan's Birthday Party", image: EventImage1, description: "Celebrate Jordan's birthday with fun and excitement!" },
    { title: "Galauran's Wedding Ceremony", image: EventImage3, description: "Join us in celebrating love and happiness." },
    { title: "Ugalde's Engagement Party", image: EventImage2, description: "A special day for a special couple!" },
    { title: "Reyes' Family Grand Reunion", image: EventImage4, description: "A gathering of love, laughter, and memories." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Infinite next slide logic
  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length); // Loop back to start
    }, 500);
  };

  // Infinite previous slide logic
  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + events.length) % events.length); // Loop back to end
    }, 500);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <p id="Logo">PLANORAMA</p>
      </header>

      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none"
          }}
        >
          {[...events, ...events].map((event, index) => ( // Duplicate array for infinite loop
            <div
              key={index}
              className="carousel-slide"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="carousel-text">
                <h1>{event.title}</h1>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
      </div>
    </>
  );
};

export default Web;
