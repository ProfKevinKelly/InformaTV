import React, { Component } from 'react';
import '../../styles.css';
import ControlPanel from '../images/ControlPanel.jpg';
import ElderContent from '../images/ElderContent.jpg';
import TCtext from '../images/TCtext.jpg';

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
      <div class="curator">
        <body>

          <h1>Curator View</h1>
          <br/>
          {/* <!--Trusted Circle Members list--> */}
          <div class="cvTopRow">
            <div id="TCListTop" class="listHeader">
              <h2>Trusted Circle Members</h2>
              <input type="text" id="NewMemb" placeholder="Name (Relation)"/>
              <span onclick="newCircleMemb()" class="Add">Add</span>
            </div>
            <ul id="TCMembList">
              <li>Bobby (Friend)</li>
              <li>Caolán (Son)</li>
              <li>Leila (Daughter)</li>
            </ul>
          </div>
          <div class="cvTopRow">
            {/* <!--Elderly Person's video content--> */}
            <img class="cvContent" src={ElderContent} alt="Placeholder1"/>
            {/* <!--Panel for controlling what Elderly Person sees (maybe it needs its own page?)--> */}
            <img class="cvPanel" src={ControlPanel} alt="Placeholder2"/>
          </div>
          <br/>

          {/* <!--Reminders & Messages, as in trusted_circle.html--> */}
          <div class="RemMsg">
            <div class="Reminders">
              <div id="RemListTop" class="listHeader">
                <h2>Reminders</h2>
                <input type="text" id="NewRem" placeholder="Reminder"/>
                <span onclick="newReminder()" class="Add">Add</span>
              </div>

              <ul id="RemList">
                <li>Call Linda</li>
                <li>Max visits tomorrow</li>
              </ul>
            </div>

            <div class="Messages">
              <div class="MsgT">
                <h2>Messages</h2>
                <img src={TCtext} alt="Placeholder3"/>
              </div>

              <div class="MsgB">
                <form action="">
                  <label for="newmsg">Send a message:</label>
                  <br/>
                  <input class="txtbox" type="text" id="newTextMsg" name="newTextMsg"/>
                  <input class="SndBtn" type="button" value="Send" onclick="alert('Message Sent')"/>
                </form>
              </div>
            </div>
          </div>

        </body>
      </div>
    );
  }
}

export default Curator;
