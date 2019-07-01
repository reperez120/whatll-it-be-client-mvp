import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import LocationEntry from '../LocationEntryPage/LocationEntry';
import EntryButton from '../EntryButton/EntryButton';
import './LandingPage.css';

class LandingPage extends Component {
    render() {
      return (
        <div className='LandingPage'>
          <header className='appHeader'>
            <h2>A Drink Suggestion App</h2> 
            <h3>
                Enter your location to get a drink suggestion 
                based on the weather in your area.
            </h3>
          </header>
            <main> 
             <Link to="/location-entry">
              <EntryButton renderAs="button">
                <span>Submit</span>
              </EntryButton>
            </Link>

            </main>
       </div>
      );
    } 
  }
  
  export default LandingPage;

  