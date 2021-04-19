import React, { Component } from 'react';
import '../../styles.css'; // css
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Reminders from '../Reminders/Reminders'; // Reminders.js
import Weather from '../Weather/weather'; // weather.js
import Chat from '../Chat/Chat'; //Chat.js

class ElderlyPortal extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    // fetch('/customers')
    //   .then(res => res.json())
    //   .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <Router>
        <body className="elderview">

          {/* Main video content */}
          <div className = "video">
                <iframe width="870" height="480" src="https://www.rte.ie/bosco/components/player/iframe.html?clipid=7&thumbnail=00151820">
                </iframe>
            </div>

          {/* Sidebar buttons */}
          <div className="sideButtons">
            <div className = "sideBtn currentButtonHighlight">
              <p>News</p>
            </div>

            <div className = "sideBtn buttonsHighlight">
              <a onClick={() => {window.location.href="/Weather"}}><p>Weather</p></a>
            </div>

            <div className= "sideBtn buttonsHighlight">
              <a onClick={() => {window.location.href="/Reminders"}}><p>Reminders</p></a>
            </div>

            <div className= "sideBtn buttonsHighlight">
              <a onClick={() => {window.location.href="/Chat"}}><p>Messages</p></a>
            </div>
          </div>

          {/* Location of weather API */}
          <div className = "weatherApi">
                <Weather></Weather>
          </div>

          {/* Breaking News Banner */}
          <div className="tcontainer">
             <div className="ticker-wrap">
               <div className="ticker-move">
                <div className="ticker-item">Prince Philip passed away at age 99 at Windsor Castle</div>
                <div className="ticker-item">Prof. Linda Doyle becomes the first female Provost at Trinity College Dublin</div>
                <div className="ticker-item">489 new Covid-19 cases and 0 deaths</div>
                <div className="ticker-item">Bayern Munich vs. PSG: 2-3</div>
               </div>
             </div>
          </div>

         {/*InformaTV News banner*/}
          <div className="newsChannel">
            <h2>InformaTV</h2>
          </div>

          <Switch>
            <Route path="/Reminders">{/* link to reminders */}
              <Reminders />
            </Route>
            <Route path="/Weather">{/* link to weather */}
              <Weather />
            </Route>
            <Route path="/Chat">{/* link to messaging chat*/}
              <Chat />
            </Route>
          </Switch>

        </body>
      </Router>
    );
  }
}

export default ElderlyPortal;
