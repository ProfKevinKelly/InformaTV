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
    <div class="Calendar"></div>
  }
}

export default Reminders;
