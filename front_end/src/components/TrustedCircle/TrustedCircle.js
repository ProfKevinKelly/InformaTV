import React, { Component } from 'react';
import '../../styles.css';
import TCtext from '../images/TCtext.jpg';
import List from "../List/List";

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
      <div class="TCircle">
        <body>

          <h1>Trusted Circle View</h1>
          {/* <!--Reminders & Messages--> */}
          <div class="RemMsg">

            <div class="Messages">
              <div class="MsgT">
                <h2>Messages</h2>
                <img src={TCtext} alt="Placeholder2"></img>{/*<!--Messages Window-->*/}
              </div>

              <div class="MsgB">
                <form action="">{/* <!--sending a message doesn't do anything atm--> */}
                  <label for="newmsg">Send a message:</label>
                  <br></br>
                  <input class="txtbox" type="text" id="newTextMsg" name="newTextMsg"></input>
                  <input class="SndBtn" type="button" value="Send" onclick="alert('Message Sent')"></input>
                </form>
              </div>
            </div>
            <br></br>
            
            <div className="Remlist">
              <List listName="Reminders" itemName="Reminder"/>
            </div>

          </div>

        </body>
      </div>
    );
  }
}

export default TrustedCircle;
