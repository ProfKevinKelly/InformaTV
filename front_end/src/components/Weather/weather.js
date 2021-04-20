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
            lon: "",
            lat:"",
            //daily info
            dt: {dt1:"",dt2:"",dt3:"",dt4:"",dt5:"",dt6:"",dt7:""},
            min: {min1:"",min2:"",min3:"",min4:"",min5:"",min6:"",min7:""},
            max: {max1:"",max2:"",max3:"",max4:"",max5:"",max6:"",max7:""},
            daily_wind_speed: {dws1:"",dws2:"",dws3:"",dws4:"",dws5:"",dws6:"",dws7:""},
            daily_icon: {di1:"",di2:"",di3:"",di4:"",di5:"",di6:"",di7:""},
            daily_humidity: {dh1:"",dh2:"",dh3:"",dh4:"",dh5:"",dh6:"",dh7:""},
            daily_description: {dd1:"",dd2:"",dd3:"",dd4:"",dd5:"",dd6:"",dd7:""},
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

        let daily_api_call = null;
        let daily_response;

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
                lon: response.coord.lon,
                lat: response.coord.lat,
                error: ""
            })

            daily_api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${weatherApiKey}`)

            daily_response = await daily_api_call.json();
            console.log("Daily_Response = ", daily_response);

            //not done for now
            this.setState({
                //dates
                dt1: daily_response.daily[0].dt.toString(),
                dt2: daily_response.daily[1].dt.toString(),
                dt3: daily_response.daily[2].dt.toString(),
                dt4: daily_response.daily[3].dt.toString(),
                dt5: daily_response.daily[4].dt.toString(),
                dt6: daily_response.daily[5].dt.toString(),
                dt7: daily_response.daily[6].dt.toString(),
                //min temps
                min1: daily_response.daily[0].temp.min.toFixed(0),
                min2: daily_response.daily[1].temp.min.toFixed(0),
                min3: daily_response.daily[2].temp.min.toFixed(0),
                min4: daily_response.daily[3].temp.min.toFixed(0),
                min5: daily_response.daily[4].temp.min.toFixed(0),
                min6: daily_response.daily[5].temp.min.toFixed(0),
                min7: daily_response.daily[6].temp.min.toFixed(0),
                //max temps
                max1: daily_response.daily[0].temp.max.toFixed(0),
                max2: daily_response.daily[1].temp.max.toFixed(0),
                max3: daily_response.daily[2].temp.max.toFixed(0),
                max4: daily_response.daily[3].temp.max.toFixed(0),
                max5: daily_response.daily[4].temp.max.toFixed(0),
                max6: daily_response.daily[5].temp.max.toFixed(0),
                max7: daily_response.daily[6].temp.max.toFixed(0),
                //daily wind speeds
                dws1: daily_response.daily[0].wind_speed,
                dws2: daily_response.daily[1].wind_speed,
                dws3: daily_response.daily[2].wind_speed,
                dws4: daily_response.daily[3].wind_speed,
                dws5: daily_response.daily[4].wind_speed,
                dws6: daily_response.daily[5].wind_speed,
                dws7: daily_response.daily[6].wind_speed,
                //daily weather icons
                di1: daily_response.daily[0].weather[0].icon,
                di2: daily_response.daily[1].weather[0].icon,
                di3: daily_response.daily[2].weather[0].icon,
                di4: daily_response.daily[3].weather[0].icon,
                di5: daily_response.daily[4].weather[0].icon,
                di6: daily_response.daily[5].weather[0].icon,
                di7: daily_response.daily[6].weather[0].icon,
                //daily humidity
                dh1: daily_response.daily[0].humidity,
                dh2: daily_response.daily[1].humidity,
                dh3: daily_response.daily[2].humidity,
                dh4: daily_response.daily[3].humidity,
                dh5: daily_response.daily[4].humidity,
                dh6: daily_response.daily[5].humidity,
                dh7: daily_response.daily[6].humidity,
                //daily weather descriptions
                dd1: daily_response.daily[0].weather[0].description,
                dd2: daily_response.daily[1].weather[0].description,
                dd3: daily_response.daily[2].weather[0].description,
                dd4: daily_response.daily[3].weather[0].description,
                dd5: daily_response.daily[4].weather[0].description,
                dd6: daily_response.daily[5].weather[0].description,
                dd7: daily_response.daily[6].weather[0].description,
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
            <div class="ul">
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
                {this.state.dt3 && <p>Date3:&nbsp;
                    {this.state.dt3}</p>}
                {this.state.min1 && <p>min1:&nbsp;
                    {this.state.min1}</p>}
            </div>

        );
    }

}

export default Weather;