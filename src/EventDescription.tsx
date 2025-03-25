import React from "react";
import "./EventDesciption.css"; 
import Notification from "./Notifications.png";
import Invite from "./Invite.png";
import Share from "./Share.png";
import EventImage1 from "./Birthday.avif";
import EventImage2 from "./Engagement.avif";
import EventImage3 from "./Marriage.avif";
import EventImage4 from "./Reunion.avif";

const events = [
    { title: "Jordan's Birthday Party", image: EventImage1, overview: "Celebrate Jordan's birthday with fun and excitement!", date: "March 25, 2025", time: "7:00 PM" },
    { title: "Galauran's Wedding Ceremony", image: EventImage3, overview: "Join us in celebrating love and happiness.", date: "April 10, 2025", time: "5:00 PM" },
    { title: "Ugalde's Engagement Party", image: EventImage2, overview: "A special day for a special couple!", date: "May 15, 2025", time: "6:30 PM" },
    { title: "Reyes' Family Grand Reunion", image: EventImage4, overview: "A gathering of love, laughter, and memories.", date: "June 5, 2025", time: "12:00 PM" }
];

const EventDescription = "Event Description";

const EventRequirements = [
    "Event Requirement 1",
    "Event Requirement 2",
    "Event Requirement 3",
    "Event Requirement 4",
    "Event Requirement 5",
    "Event Requirement 6",
    "Event Requirement 7",
    "Event Requirement 8",
    "Event Requirement 9",
];

const EventDescrip: React.FC = () => {
    const event = events[0]; // Change this index to select a specific event

    return (
        <>
            <div className="Gradient">
                <div className="DescriptionHeader">
                    <h1>{event.title}</h1>
                    <h3>{event.time}</h3>
                    <h3>{event.date}</h3>
                    <img src={Notification} alt="Event Notifications" />
                    <img src={Invite} alt="Event Invitations" />
                    <img src={Share} alt="Event Sharing" />
                    <p>{event.overview}</p>
                </div>
                <div className="DescriptionContent">
                    <p>{EventDescription}</p>
                </div>
                <div className="DescriptionRequirements">
                    {EventRequirements.map((requirement, index) => (
                        <div key={index}>
                            <input type="checkbox" id={`req${index}`} />
                            <label htmlFor={`req${index}`}>{requirement}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EventDescrip;
