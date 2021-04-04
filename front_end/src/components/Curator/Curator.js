import React, { Component } from 'react';
import '../../styles.css'; // css
import TCtext from '../images/TCtext.jpg'; // text messages image placeholder
import List from "../List/List"; // list component
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Curator extends Component {
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
        <div className="backg">
          {/* Page header */}
          <div className="header">
            <h1>Curator View</h1>
          </div>
           {/* Media */}
          <div className="media">
            <div className = "weatherApi" bg="#00000000">
              {/* Weather */}
              <img src="https://i.pinimg.com/originals/71/a4/17/71a417ad67f61d12019794659776448d.jpg" alt="Essential Info" width="240px" height="200px"/>
            </div>
            <div className="video">
              {/* News */}
              <iframe width="750" height="400" src="https://www.rte.ie/bosco/components/player/iframe.html?clipid=7&thumbnail=00151820">
              </iframe>
            </div>
          </div>
          <div className="sideButtons">

            <div className="RemMsg">
              
              {/* Trusted Circle List */}
              <div className="TClist">
                <List listName="Trusted Circle Members" itemName="Name (Relation)" perishable={false}/>
              </div>

              {/* Reminders List */}
              <div className="Remlist">
                <List listName="Reminders" itemName="Reminder" perishable={true}/>
              </div>

              {/* Messages */}
              <div className="Messages">
                <div className="MsgT">
                  <h2>Messages</h2>
                  <img src={TCtext} alt="Placeholder3"/>
                </div>
                <div className="MsgB">
                  <form action="">
                    <label htmlFor="newmsg">Send a message:</label><br/>
                    <input className="txtbox" type="text" id="newTextMsg" name="newTextMsg"/>
                    <input className="SndBtn" type="button" value="Send" onClick="alert('Message Sent')"/>
                  </form>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Router>
    );
  }
}

export default Curator;
