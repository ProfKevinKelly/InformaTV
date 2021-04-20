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
  }

  componentDidMount() {
    fetch('/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
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
          <List
            uniqueName="CuratorTCList" 
            listName="Trusted Circle Members" 
            isReminder={false}
          />

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
