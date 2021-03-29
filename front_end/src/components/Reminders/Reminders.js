import React, { Component } from 'react';
import '../../styles.css';

class Reminders extends Component {
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
    <div class="Calendar">
      <iframe width="750" height="400" src="https://calendar.google.com/calendar"></iframe>
    </div>
    );
  }
}

export default Reminders;
