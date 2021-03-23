import React, { Component } from 'react';
import '../../styles.css';

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
      <div>
        <h1>Trusted Circle View</h1>

        {/* <!--video content currently seen by Elderly Person--> */}
        <iframe class="TCvid" width="517" height="221" src="https://www.youtube.com/embed/5yW-v7EQkKA" frameborder="0" allowfullscreen></iframe>
        {/* <!--<img class="tcVid" src="images/TCvideo.jpg" alt="Placeholder1">--> */}
        <br/>
        {/* <!--Reminders & Messages--> */}
        <div class="RemMsg">
          
          <div class="Reminders">
            <div id="RemListTop" class="listHeader">
              <h2>Reminders</h2>
              <input type="text" id="NewRem" placeholder="Reminder"/>
              <span onclick="newReminder()" class="Add">Add</span>
            </div>

            <ul id="RemList">
              <li>Call Linda</li>
              {/* <!--placeholder reminder--> */}
              <li>Max visits tomorrow</li>
              {/* <!--placeholder reminder--> */}
            </ul>
          </div>

          <div class="Messages">
            <div class="MsgT">
              <h2>Messages</h2>
              <img src="images/TCtext.jpg" alt="Placeholder2"/>
                {/* <!--Messages Window--> */}
            </div>

            <div class="MsgB">
              <form action="">
                {/* <!--sending a message doesn't do anything atm--> */}
                <label for="newmsg">Send a message:</label>
                <br/>
                <input class="txtbox" type="text" id="newTextMsg" name="newTextMsg"/>
                <input class="SndBtn" type="button" value="Send" onclick="alert('Message Sent')"/>
              </form>
            </div>
          </div>

        </div>
        
      </div>
    );
  }
}

export default TrustedCircle;
