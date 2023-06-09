import React from 'react';
import axios from 'axios';
import './App.css';
import PageOne from '../FormPages/FormPageOne.jsx';
import PageTwo from '../FormPages/FormPageTwo.jsx';
import PageThree from '../FormPages/FormPageThree.jsx';
import PageFour from '../FormPages/FormPageFour.jsx';
import PageFive from '../FormPages/FormPageFive.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path="/">
            <PageOne />
        </Route>
        <Route exact path="/pageTwo">
            <PageTwo /> 
        </Route>
        <Route exact path="/pageThree">
            <PageThree /> 
        </Route>
        <Route exact path="/pageFour">
            <PageFour />
        </Route>
        <Route exact path="/pageFive">
            <PageFive />
        </Route>
      </Router>
    </div>
  );
}

export default App;
