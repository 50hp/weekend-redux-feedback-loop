import React from 'react';
import axios from 'axios';
import './App.css';
import PageOne from '../FormPages/FormPageOne.jsx';
import PageTwo from '../FormPages/FormPageTwo.jsx';
import PageThree from '../FormPages/FormPageThree.jsx';
import PageFour from '../FormPages/FormPageFour.jsx';
import PageFive from '../FormPages/FormPageFive.jsx';
import Form from '../FormPages/Form.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Success from '../StatusPages/Success.jsx';

function App() {
        
    let test = 'test';


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <form>
            <Route exact path="/" component={PageOne}/>
            <Route exact path="/pageTwo" component={PageTwo}/>
            <Route exact path="/pageThree" component={PageThree}/>
            <Route exact path="/pageFour" component={PageFour}/>
            <Route exact path="/pageFive" component={PageFive}/>
            <Route exact path="/Success" component={Success}/>
        </form>   
      </Router>
    </div>
  );
}

export default App;
