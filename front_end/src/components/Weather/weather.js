import React, { Component, useEffect } from 'react';


class Weather extends Component{
    constructor(){
        super();
        this.state = {
            icon: "",
            temperature: "",
            city: "",
            country: "",
            pressure: "",
            error: ""
        }
        this.getWeather();
    }

    async getWeather() {
        const city = 'Dublin';
        const country = 'ie';
        const weatherApiKey = '94d6a34f4bc6a9dde98f67998acffbcb';
        ;

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${weatherApiKey}`)

        const response = await api_call.json();


        if(city && country && response.weather){
            this.setState({
                icon: response.weather[0].icon,
                temperature: response.main.temp,
                city: response.name,
                country: response.sys.country,
                pressure: response.main.pressure,
                error: ""
            })
        }
        else{
            this.setState({
                error: "Sorry your curator messed up(dolboeb)"
            })
        }
    }

    render(){
        return(
            <div>
                {this.state.icon && <img src={`https://openweathermap.org/img/w/${this.state.icon}.png`} alt = "weather icon" width = "25%" 
                height = "25%"/>}
                {this.state.country && this.state.city && <p>Location:
                {this.state.country}, {this.state.city}</p>}
                {this.state.temperature && <p> Temperature:
                {this.state.temperature}</p>}
                {this.state.pressure && <p> Pressure:
                {this.state.pressure}</p>}
                {this.state.error &&<p>{this.state.error}</p>}
                
            </div>
        );
    }

}

export default Weather;