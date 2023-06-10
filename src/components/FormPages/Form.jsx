import React from 'react';
import axios from 'axios';
import PageOne from '../FormPages/FormPageOne.jsx';
import PageTwo from '../FormPages/FormPageTwo.jsx';
import PageThree from '../FormPages/FormPageThree.jsx';
import PageFour from '../FormPages/FormPageFour.jsx';
import PageFive from '../FormPages/FormPageFive.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Success from '../StatusPages/Success.jsx';


function Form() {


        return (

            <div>
                <p>asdlkjas;dlkfj</p>
                <Router>
                    <Route exact path='/FormPageOne'>
                        <PageOne/>
                    </Route>





                </Router>
            </div>



        );

}

export default Form;
