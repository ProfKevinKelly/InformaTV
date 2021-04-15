import React, { Component } from 'react';
import '../../styles.css'; // css
import TCtext from '../images/TCtext.jpg'; // text messages image placeholder
import List from "../List/List"; // list component
import {
  BrowserRouter as Router,
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
          <List uniqueName="CuratorTCList" 
          listName="Trusted Circle Members" 
          itemName="Name" 
          perishable={false}/>
          <select>
            <option selected value="Family">Family</option>
            <option value="Friends">Friends</option>
            <option value="CareTaker">Care Taker</option>
            <option value="Custom">Custom</option>
          </select>
          
          {/* Reminders List 
          <List uniqueName="CuratorRemList" listName="Reminders" itemName="Reminder" perishable={true}/>*/}

          {/* Messages 
          <div className="sideButtons">
            <div className="sideBtn"><br/>
              <a onClick={() => {window.location.href="/Chat"}}><h2>Messages</h2></a>
            </div>
          </div>*/}

          <div className="sideButtons">
            <div className="sideBtn"><br/>
              <a onClick={() => {window.location.href="/TrustedCircle"}}><h2>My Trusted Circle View</h2></a>
            </div>
          </div>

        </body>
      </Router>
    );
  }
}

export default Curator;
