import React from 'react';
import './App.css';
import Home from './Components/Home'
import Education from './Components/Education'
import Navbar from './Components/CoustomNavbar'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Layout from './Components/Layout'

function App() {
  return (
    
      <React.Fragment>
      
   
      
      <Router>
        <Navbar />
        <Layout>
          <Route exact path = '/' component = {Home} />
          <Route  path = '/Education' component = {Education} />
        </Layout>
      </Router>
      </React.Fragment>
      
    
  );
}

export default App;
