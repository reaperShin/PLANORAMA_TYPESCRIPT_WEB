import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "./Progress.css";

const progressCategories = [
    {
        title: "Personal",
        tasks: [
            { id: 1, name: "Morning Workout", completed: false },
            { id: 2, name: "Read a Book", completed: false },
            { id: 3, name: "Meditate", completed: false }
        ]
    },
    {
        title: "Work",
        tasks: [
            { id: 4, name: "Finish Project Report", completed: false },
            { id: 5, name: "Attend Meeting", completed: false },
            { id: 6, name: "Reply to Emails", completed: false }
        ]
    },
    {
        title: "Study",
        tasks: [
            { id: 7, name: "Complete Assignment", completed: false },
            { id: 8, name: "Review Notes", completed: false },
            { id: 9, name: "Practice Coding", completed: false }
        ]
    }
];

const ProgressTracker: React.FC = () => {
    const [progress, setProgress] = useState(progressCategories);

    // Function to handle checkbox change
    const handleCheckboxChange = (categoryIndex: number, taskIndex: number) => {
        const updatedProgress = [...progress];
        updatedProgress[categoryIndex].tasks[taskIndex].completed = !updatedProgress[categoryIndex].tasks[taskIndex].completed;
        setProgress(updatedProgress);
    };

    // Calculate progress data for the chart
    const chartData = progress.map(category => ({
        name: category.title,
        completed: category.tasks.filter(task => task.completed).length,
        total: category.tasks.length
    }));

    return (
        <>
        <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Task Progress Tracker</h1>

            {/* Task Lists */}
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
                {progress.map((category, categoryIndex) => (
                    <div key={categoryIndex} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "10px", minWidth: "250px", background: "#f8f8f8" }}>
                        <h3>{category.title}</h3>
                        {category.tasks.map((task, taskIndex) => (
                            <div key={task.id} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleCheckboxChange(categoryIndex, taskIndex)}
                                    style={{ marginRight: "10px" }}
                                />
                                <label style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.name}</label>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Bar Chart */}
            <div style={{ width: "100%", height: "300px", marginTop: "40px" }}>
                <h2>Progress Chart</h2>
                <ResponsiveContainer width="70%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="completed" fill="#4caf50" name="Completed Tasks" />
                        <Bar dataKey="total" fill="#ccc" name="Total Tasks" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        </>
    );
};

export default ProgressTracker;