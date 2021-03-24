import React, { Component } from 'react';
import '../../styles.css';

class ElderlyPortal extends Component {
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
      <div class="backg">
        <div class="header">
            <h1>InformaTv</h1>
        </div>

        <div class="media">
            <div class = "weatherApi" bg="#00000000">
                {/* <!weather api--> */}
                <img src="https://i.pinimg.com/originals/71/a4/17/71a417ad67f61d12019794659776448d.jpg" alt="Essential Info" width="240px" height="200px"/>
            </div>
            <div class = "video">
                {/* <! current program running--> */}
                <iframe width="750" height="400" src="http://www.youtube.com/embed/z0pNQY6DyXo?t=6">
                </iframe>
            </div>
        </div>
        <div class="sideButtons">
            <div class="sideBtn"><br/><p>Reminders</p></div>
            <div class="sideBtn"><br/><p>Call</p></div>
            <div class="sideBtn"><br/><p>Message</p></div>
        </div>
        <div class ="bottomButtons">
            <div class="bottomBtn"><img src="https://img.freepik.com/free-vector/sports-news-with-abstract-background-sports-elements_1419-1926.jpg?size=626&ext=jpg" width="100%" height="100%"/></div>
            <div class="bottomBtn"><img src="https://www.gannett-cdn.com/media/2018/02/16/PAGroup/YorkDailyRecord/636543689783396308-weather-news.jpg" width="100%" height="100%"/></div>
            <div class="bottomBtn"><img src="https://thefederalist.com/wp-content/uploads/2017/07/Screen-Shot-2017-07-20-at-2.48.26-PM-998x661.png" width="100%" height="100%"/></div>
            <div class="bottomBtn"><img src="https://youthincmag.com/wp-content/uploads/2016/03/Gladiator-2000.jpg" width="100%" height="100%"/></div>
        </div>
      </div>
    );
  }
}

export default ElderlyPortal;
