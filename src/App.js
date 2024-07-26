import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header id="main" />
      <Feature id="features" />
      <Offer id="presentation" />
      <About id="about" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
