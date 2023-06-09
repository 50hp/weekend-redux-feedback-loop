import React from 'react';
import axios from 'axios';
import './App.css';
import Page from '../FormPages/FormPage.jsx';
import PageFive from '../FormPages/FormPageFive.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Success from '../StatusPages/Success.jsx';
import AdminPanel from '../AdminPanel/AdminPanel.jsx';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  return (

    <CssBaseline>
        <div className='App'>
          <Router>
            <form>
                <Route exact path="/">
                    <Page nextPath={"/pageTwo"}
                          type={"PAGE_ONE"}
                          kind={"number"}
                          question={"How are you feeling?"}
                          label={"Feeling? "}
                          page={"ONE"}/>
                </Route>
                <Route exact path="/pageTwo">
                    <Page nextPath={"/pageThree"}
                          prePath={"/"}
                          type={"PAGE_TWO"}
                          kind={"number"}
                          question={"How well are you understanding the content?"}
                          label={"Understanding? "}
                          page={"TWO"}/>
                </Route>
                <Route exact path="/pageThree">
                    <Page nextPath={"/pageFour"}
                          prePath={"/pageTwo"}
                          type={"PAGE_THREE"}
                          kind={"number"}
                          question={"How well are you being supported?"}
                          label={"Support? "}
                          page={"THREE"}/>
                </Route>
                <Route exact path="/pageFour">
                    <Page nextPath={"/pageFive"}
                          prePath={"/pageThree"}
                          type={"PAGE_FOUR"}
                          kind={"text"}
                          question={"Any comments you want to leave?"}
                          label={"Comments? "}
                          page={"FOUR"}/>
                </Route>
                <Route exact path="/pageFive" component={PageFive}/>
                <Route exact path="/Success" component={Success}/>
                <Route exact path="/admin" component={AdminPanel}/>
            </form>   
          </Router>
        </div>
    </CssBaseline>
  );
}

export default App;
