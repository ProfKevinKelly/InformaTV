import Weather from './weather';

//Forecast extends Weather so it has same functions and copies the constructor as well
//this way it can access all the Weather information
class Forecast extends Weather{
    constructor(){
        super();
    }
    //render hasn't been finished but it has all the information
    //just need to find a way to display it
    render(){
        return(
            <div>
                {this.state.min1 && <p>min1:&nbsp;
                    {this.state.min1}</p>}
            </div>
        );
    }
}

export default Forecast;