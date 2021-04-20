import Weather from './weather';

class Forecast extends Weather{
    constructor(){
        super();
    }
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