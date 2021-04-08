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
        <body className="curatorview">
          
          <h1>Curator View</h1>

          {/* Elder's video content */}
          <div className="video">
            <iframe width="100%" height="420px" src="https://www.rte.ie/bosco/components/player/iframe.html?clipid=7&thumbnail=00151820">
            </iframe>
          </div>
            
          {/* Trusted Circle List */}
          <List uniqueName="CuratorTCList" listName="Trusted Circle Members" itemName="Name (Relation)" perishable={false}/>

          {/* Reminders List */}
          <List uniqueName="CuratorRemList" listName="Reminders" itemName="Reminder" perishable={true}/>

          {/* Messages */}
          <div className="Messages">

            <div className="MsgT">
              <h2>Messages</h2>
              <img src={TCtext} alt="Placeholder"/>
            </div>

            <div className="MsgB">
              <form action="">
                <label htmlFor="newmsg">Send a message:</label><br/>
                <input className="txtbox" type="text" id="newTextMsg" name="newTextMsg"/>
                <input className="SndBtn" type="button" value="Send" onClick="alert('Message Sent')"/>
              </form>
            </div>

          </div>

        </body>
      </Router>
    );
  }
}

export default Curator;
