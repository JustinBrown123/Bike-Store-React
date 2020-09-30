import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props){
    super(props);
    this.state = {
            error: null,
            weather: [],
            weatherImage: null,
            temp: null,
            isLoaded: false,
        };
    }
    

    componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=youngstown,ohio&units=imperial&appid='+ process.env.REACT_APP_WEATHER_ID)
        // fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then( json => {
            this.setState({              
                isLoaded:true,
                temp: json.main.temp,
                weatherImage: "http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png",
                weather: json.weather[0].description,

            });
        },
        (error)=>{
            this.setState({
                isLoaded: true,
                error
            });
        }
        )
    }
    render() {
        
        const{error, isLoaded, temp, weather, weatherImage} = this.state;
        let timeToBike = null;

        let weatherConditions = weather.toString().toLowerCase();
        var badWeather = /rain|snow|shower|storm|thunder|blizzard/.test(weatherConditions)

        if ( temp > 65 && weatherConditions.includes("sun")){
            timeToBike = <div>Its Beautiful You should Bike</div>
        }else if (badWeather === true || temp < 35){
            timeToBike = <h4>We Have all your indoor needs, <br/> checkout out trainer selection</h4>
        }else if (badWeather === false && temp > 45){
            timeToBike = <div>Go for a brisk ride today</div>
        }

        if(error){
            return <div>Error: {error.message} </div>
        } else if(!isLoaded){
            return<div>Loading....</div>
        } else{
        return(
            <div className='text-center'>
                
                <div className="text-capitalize">It is {temp}℉ with {weather} conditions</div>
                    <div><img src= {weatherImage} alt="icon"/></div>
               
              
               {timeToBike}
            </div>
        );
    }
}
}
    