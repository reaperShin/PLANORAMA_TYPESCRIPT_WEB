import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import Router
import "./index.css";
import Web from "./App"; // ✅ Renamed Login → Web
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./dashboard";
import TableSettings from "./TableSettings";
import EventDescription from "./EventDescription";
import Progress from "./Progress";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router> {/* ✅ Use BrowserRouter */}
      <Routes>
        <Route path="/" element={<Web />} /> {/* ✅ Corrected Web component */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Fixed path */}
        <Route path="/EventDescription" element={<EventDescription />} />
        <Route path="/Progress" element={<Progress />} />
        <Route path="/TableSettings" element={<TableSettings />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// ✅ Performance Monitoring (Optional)
reportWebVitals();
