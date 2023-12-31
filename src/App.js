import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage";
import Flights from "./Pages/Flights";
import CarRental from "./Pages/CarRental";
import Attractions from "./Pages/Attractions";
import SearchResult from "./Pages/SearchResult";
import Notification from "./Components/Notification";
import Hotel from "./Pages/Hotel";

// Components
import { Footer } from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-[100vh] flex flex-col gap-5">
        <Routes>
          <Route path="/stays" element={<Homepage />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/car-rentals" element={<CarRental />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/stays/:item" element={<SearchResult />} />
          <Route path="/stays/:item/:name/:id" element={<Hotel />} />
          <Route path="/" element={<Navigate replace to="/stays" />} />
        </Routes>

        <div>
          <Notification />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
