import React, { useState, useEffect } from "react";
import "./description.css";

const Web: React.FC = () => {
    const [title, setTitle] = useState<string>("Loading...");
    const [description, setDescription] = useState<string>("Loading...");
    const [date, setDate] = useState<string>("Loading...");
    const [time, setTime] = useState<string>("Loading...");
    const [showForm, setShowForm] = useState<boolean>(false);
    const [showEventForm, setShowEventForm] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [titleRes, descriptionRes, timeRes, dateRes] = await Promise.all([
                    fetch("/api/title").then((res) => res.json()),
                    fetch("/api/description").then((res) => res.json()),
                    fetch("/api/time").then((res) => res.json()),
                    fetch("/api/date").then((res) => res.json()),
                ]);

                setTitle(titleRes.title);
                setDescription(descriptionRes.description);
                setTime(timeRes.time);
                setDate(dateRes.date);
            } catch (error) {
                console.error("Error fetching data:", error);
                setTitle("Error loading data");
                setDescription("Error loading data");
                setTime("Error loading data");
                setDate("Error loading data");
            }
        };

        fetchData();
    }, []);

    const toggleForm = () => {
        setShowForm((prev) => !prev);
    };

    const toggleEventForm = () => {
        setShowEventForm((prev) => !prev);
    };

    return (
        <div>
            <button className="FormBtn" onClick={toggleForm}>Show Description</button>
            <button className="EventBtn" onClick={toggleEventForm}>Create Event</button>

            {showForm && (
                <div className="overlay">
                    <div className="Form">
                        <h1>{title}</h1>
                        <h3>{date}</h3>
                        <h3>{time}</h3>
                        <p>{description}</p>
                        <button className="CloseBtn" onClick={toggleForm}>Close</button>
                    </div>
                </div>
            )}

            {showEventForm && (
                <div className="overlay">
                    <div className="Form">
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
                        <button className="CloseBtn" onClick={toggleEventForm}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Web;
