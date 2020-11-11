import React, { Component } from 'react'
import styled from "styled-components"

const StyledWeather = styled.div`
    font-size: calc(.5vw + 10px);
    
    width: 50%;
    margin: auto;
    padding: 1vw;

    .weather-conditions{
        align-self:center;
        padding-right: 1vw;
        
    }
    .icon-container{
        background: var(--lightColor);
        height: auto;
        border-radius: 20%;
        
        
    }
    .riding-condition{
    margin: auto;

}
@media(max-width: 768px){
    width: 95%;
    .weather-icon{
        width: 50px;
    }

}

    

`

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
            timeToBike = <div className="article-title">Its Beautiful You should Bike</div>
        }else if (badWeather === true || temp < 35){
            timeToBike =  "We Have all your indoor needs, checkout out trainer selection"
        }else if (badWeather === false && temp > 45){
            timeToBike =  <div><div className="article-title">Go for a Cool brisk ride today</div>
                            <div className='article-text'>we have all the cool weather gear</div></div>
        }else {
            timeToBike = <div>No matter The Weather We have your biking needs</div>
        }

        if(error){
            return <div>Error: {error.message} </div>
        } else if(!isLoaded){
            return<div>Loading....</div>
        } else{
        return(
            <StyledWeather>
                <div className="d-inline-flex">
                <div className="weather-conditions ">
                        Currently: {temp}℉</div> 
                  <div className="icon-container "><img className="weather-icon" src= {weatherImage} alt="icon"/></div> 
                  </div>
                <div className="riding-condition">{timeToBike}</div> 

            </StyledWeather>
        );
    }
}
}
    