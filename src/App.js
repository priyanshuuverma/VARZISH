import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import correct components
import Navbar from './Components/Navbar';
import Header from './Components/Header/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/main" element={<Header />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/presentation" element={<Offer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* You can add a fallback route for unmatched paths */}
          <Route path="*" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
