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

          <h1>InformaTV</h1>

          {/* Main video content */}
          <div className="video">
            <iframe width="100%" height="300px" src="https://www.rte.ie/bosco/components/player/iframe.html?clipid=7&thumbnail=00151820">
            </iframe>
          </div>

          {/* Sidebar buttons */}
          <div className="sideButtons">

            <div class = "sideBtn"><br/>
              <Link to="/Weather" style={{padding:20}}>Weather</Link>
            </div>
            <div className="sideBtn"><br/>
              <Link to="/Reminders" style={{padding:20}}>Reminders</Link>
            </div>
            <div className="sideBtn"><br/>
              <p>Message</p>
            </div>

          </div>

          {/* Bottom content selection buttons */}
          <div class ="bottomButtons">

            <div className="bottomBtn">
              <img src="https://img.freepik.com/free-vector/sports-news-with-abstract-background-sports-elements_1419-1926.jpg?size=626&ext=jpg" width="100%" height="100%"/>
            </div>
            <div className="bottomBtn">
              <img src="https://www.gannett-cdn.com/media/2018/02/16/PAGroup/YorkDailyRecord/636543689783396308-weather-news.jpg" width="100%" height="100%"/>
            </div>
            <div className="bottomBtn">
              <img src="https://thefederalist.com/wp-content/uploads/2017/07/Screen-Shot-2017-07-20-at-2.48.26-PM-998x661.png" width="100%" height="100%"/>
            </div>
            <div className="bottomBtn">
              <img src="https://youthincmag.com/wp-content/uploads/2016/03/Gladiator-2000.jpg" width="100%" height="100%"/>
            </div>

          </div>

          <Switch>
            <Route path="/Reminders">{/* link to reminders */}
              <Reminders />
            </Route>
            <Route path="/Weather">{/* link to weather */}
              <Weather />
            </Route>
          </Switch>

        </body>
      </Router>
    );
  }
}

export default ElderlyPortal;
