import React, { Component, useEffect } from 'react';


class Weather extends Component{
    constructor(){
        super();
        this.state = {
            icon: "",
            temperature: "",
            city: "",
            country: "",
            humidity: "",
            wind_speed: "",
            clouds: "",
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
        console.log("Response = ", response);

        if(city && country && response.weather){
            this.setState({
                icon: response.weather[0].icon,
                temperature: response.main.temp.toFixed(0),
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                wind_speed: response.wind.speed,
                clouds: response.weather[0].description,
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
                {this.state.icon && <img src={`https://openweathermap.org/img/w/${this.state.icon}.png`} alt = "weather icon" width = "20%" 
                height = "10%"/>}
                {this.state.country && this.state.city && <p>Location:&nbsp; 
                    {this.state.city}, {this.state.country}</p>}
                {this.state.temperature && <p> Temperature:&nbsp;
                    {this.state.temperature}&deg;C</p>}
                {this.state.humidity && <p> Humidity:&nbsp;
                    {this.state.humidity}%</p>}
                {this.state.wind_speed && <p> Wind Speed:&nbsp;
                    {this.state.wind_speed} km/h</p>}
                {this.state.clouds && <p> Weather Description:&nbsp;
                    {this.state.clouds} </p>}
                {this.state.error &&<p>{this.state.error}</p>}
            </div>
        );
    }

}

export default Weather;