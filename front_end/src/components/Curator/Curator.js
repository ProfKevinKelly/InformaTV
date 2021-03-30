import React, { Component } from 'react';
import '../../styles.css';
import ControlPanel from '../images/ControlPanel.jpg';
import ElderContent from '../images/ElderContent.jpg';
import TCtext from '../images/TCtext.jpg';
import List from "../List/List";
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
      <div class="backg">
        <div class="header">
            <h1>Curator View</h1>
        </div>
        <div class="media">
            <div class = "weatherApi" bg="#00000000">
                {/* <!weather api--> */}
                <img src="https://i.pinimg.com/originals/71/a4/17/71a417ad67f61d12019794659776448d.jpg" alt="Essential Info" width="240px" height="200px"/>
            </div>
            <div class="video">
                <iframe width="750" height="400" src="https://www.rte.ie/bosco/components/player/iframe.html?clipid=7&thumbnail=00151820">
                </iframe>
            </div>
        </div>
        <div class="sideButtons">
            <div class="RemMsg">
              <div className="TClist">
                <List listName="Trusted Circle Members" itemName="Name (Relation)"/>
              </div>
              <div className="Remlist">
                <List listName="Reminders" itemName="Reminder"/>
              </div>
              <div class="Messages">
                <div class="MsgT">
                  <h2>Messages</h2>
                  <img src={TCtext} alt="Placeholder3"/>
                </div>
                <div class="MsgB">
                  <form action="">
                    <label for="newmsg">Send a message:</label><br/>
                    <input class="txtbox" type="text" id="newTextMsg" name="newTextMsg"/>
                    <input class="SndBtn" type="button" value="Send" onclick="alert('Message Sent')"/>
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
