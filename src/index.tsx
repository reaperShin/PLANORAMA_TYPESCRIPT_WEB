import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Web from "./App"; // Renamed from Login to Web
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./dashboard";
import TableSettings from "./TableSettings"; // Fixed name
import EventDescription from "./EventDescription"; // Fixed name
import ProgressTracker from "./Progress";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <TableSettings />
    </Router>
  </React.StrictMode>
);

// ✅ Performance Monitoring (Optional)
reportWebVitals();

/*
<Routes>
        <Route path="/" element={<Web />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/EventDescription" element={<EventDescription />} /> 
        <Route path="/Progress" element={<ProgressTracker />} />
        <Route path="/TableSettings" element={<TableSettings />} /> 
      </Routes>
*/
