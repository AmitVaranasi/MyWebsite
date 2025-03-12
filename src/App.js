import React from 'react';
import './App.css';
import Home from './Components/Home';
import Education from './Components/Education';
import Navbar from './Components/CoustomNavbar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //updated the import
import Layout from './Components/Layout';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Layout>
        <Routes> {/*added the Routes tag*/}
          <Route exact path="/" element={<Home />} /> {/* changed component to element */}
          <Route path="/Education" element={<Education />} /> {/* changed component to element */}
          <Route path="/Skills" element={<Skills />} /> {/* changed component to element */}
          <Route path="/Projects" element={<Projects />} /> {/* changed component to element */}
        </Routes> {/*added the Routes tag*/}
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
