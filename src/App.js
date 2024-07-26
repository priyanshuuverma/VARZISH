import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <switch>
      <Router path="/main">
      <Header/>
      </Router>
      <Router path="/features">
      <Feature/>
      </Router>
      <Router path="/presentation">
      <Offer/>
      </Router><Router exact path="/about">
      <About/>
      </Router>
      <Router path="/contact">
      <Contact/>
      </Router>
      </switch>
      
      
      
    </div>
  );
}

export default App;
