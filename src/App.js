import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage";
import { Flights } from "./Pages/Flights";

// Components
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-[100vh] flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/flights" element={<Flights />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
