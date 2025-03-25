import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./dashboard.css";
import EventImage1 from "./Birthday.avif";
import EventImage2 from "./Engagement.avif";
import EventImage3 from "./Marriage.avif";
import EventImage4 from "./Reunion.avif";

const Dashboard: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigation

  const events = [
    { title: "Jordan's Birthday Party", image: EventImage1, description: "Celebrate Jordan's birthday with fun and excitement!", date: "March 25, 2025", time: "7:00 PM" },
    { title: "Galauran's Wedding Ceremony", image: EventImage3, description: "Join us in celebrating love and happiness.", date: "April 10, 2025", time: "5:00 PM" },
    { title: "Ugalde's Engagement Party", image: EventImage2, description: "A special day for a special couple!", date: "May 15, 2025", time: "6:30 PM" },
    { title: "Reyes' Family Grand Reunion", image: EventImage4, description: "A gathering of love, laughter, and memories.", date: "June 5, 2025", time: "12:00 PM" }
  ];

  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [showEventForm, setShowEventForm] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleSlideClick = (event: any) => {
    setSelectedEvent(event);
  };

  const toggleEventForm = () => {
    setShowEventForm((prev) => !prev);
  };

  // Function to navigate to Progress.tsx
  const handleNavigateToEventDescription = () => {
    navigate("/EventDescription");
  };

  const handleNavigateToProgress = () => {
    navigate("/Progress");
  };

  const returnEventForm = () => {
    navigate("/App");
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
        <p id="Logo">PLANORAMA</p>
        <div className="NavButts">
        <button className="EventBtn" onClick={toggleEventForm}>Add Event</button>
        <button className="LogoutBtn" onClick={returnEventForm}>Logout</button>
        </div>
      </header>

      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none"
          }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ backgroundImage: `url(${event.image})` }}
              onClick={() => handleSlideClick(event)}
            >
              <div className="carousel-text">
                <h1>{event.title}</h1>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
      </div>

      {selectedEvent && (
        <div className="overlay">
          <div className="Form">
            <h1>{selectedEvent.title}</h1>
            {selectedEvent.date && <h3>Date: {selectedEvent.date}</h3>}
            {selectedEvent.time && <h3>Time: {selectedEvent.time}</h3>}
            <p>{selectedEvent.description}</p>
            <button className="CloseBtn" onClick={() => setSelectedEvent(null)}>Close</button>
            <button className="EnterBtn" onClick={handleNavigateToEventDescription}>Description</button> {/* Navigate to Progress.tsx */}
          </div>
        </div>
      )}

      {showEventForm && (
        <div className="overlay">
          <div className="EventForm">
            <h2>Create Event</h2>
            <form>
              <input className="textbox" type="text" placeholder="Event Name" />
              <input className="textbox" type="text" placeholder="Address" />
              <input className="textbox" type="time" />
              <input className="textbox" type="date" />
              <input className="descriptionBox" type="text" placeholder="Enter Event Description" />
            </form>

            <form>
              <div className="Categories">
                <input className="catTextbox" type="text" placeholder="Input Category Name" />
                <button type="button">+</button>
              </div>
              <div className="Categories">
                <input className="catTextbox" type="text" placeholder="Input Task Name" />
                <button type="button">+</button>
              </div>
              <div className="Categories">
                <input className="catTextbox" type="number" placeholder="Input Required Expenses" />
                <button type="button">+</button>
              </div>
              <input type="file" aria-label="Upload Image" />
            </form>
            <div className="Btns">
              <button className="CloseBtn" onClick={toggleEventForm}>Close</button>
              <button className="EnterBtn" onClick={handleNavigateToProgress}>Create</button> {/* Navigate to Progress.tsx */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
