import React, { Component } from 'react';
import '../../styles.css'; // css
import TCtext from '../images/TCtext.jpg'; // messaging placeholder 
import List from "../List/List"; // list component
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class TrustedCircle extends Component {
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
      <body className="TCview">

        <h1>Trusted Circle View</h1>

        {/* Messages */}
        <div className="sideButtons">
          <div className="sideBtn"><br/>
            <Link to="/Chat"><h2>Messages</h2></Link>
          </div>
        </div>
        
        {/* Reminders */}
        <List uniqueName="TCircleRemList" listName="Reminders" itemName="Reminder" perishable={true}/>

      </body>
    );
  }
}

export default TrustedCircle;
