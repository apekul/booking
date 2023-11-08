import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage";
import { Flights } from "./Pages/Flights";

// Components
import { Footer } from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-[100vh] flex flex-col gap-5">
        <Routes>
          <Route path="/stays" element={<Homepage />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/car-rentals" element={<Flights />} />
          <Route path="/attractions" element={<Flights />} />
          <Route path="/airport-taxi" element={<Flights />} />
          <Route path="/" element={<Navigate replace to="/stays" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
