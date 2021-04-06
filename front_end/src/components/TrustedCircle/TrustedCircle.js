import React, { Component } from 'react';
import '../../styles.css'; // css
import TCtext from '../images/TCtext.jpg'; // messaging placeholder 
import List from "../List/List"; // list component

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
        <div className="Messages">

          <div className="MsgT">
            <h2>Messages</h2>
            <img src={TCtext} alt="Placeholder"></img>{/* Messages Window */}
          </div>

          <div className="MsgB">
            <form action="">{/* TODO: implement text messaging */}
              <label htmlFor="newmsg">Send a message:</label>
              <br></br>
              <input className="txtbox" type="text" id="newTextMsg" name="newTextMsg"></input>
              <input className="SndBtn" type="button" value="Send" onclick="alert('Message Sent')"></input>
            </form>
          </div>

        </div>
        <br/>
        
        {/* Reminders */}
        <div className="Remlist">
          <List listName="Reminders" itemName="Reminder" perishable={true}/>
        </div>

      </body>
    );
  }
}

export default TrustedCircle;
