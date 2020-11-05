import React, { Component } from 'react';
import {localTrails} from '../trailData';
import Weather from './Weather';
import styled from 'styled-components'
import {ridingResources}  from '../groupresources'

const TrailContainer = styled.div` 
.top-container{
    width: 80%;
    margin:auto;
}
.weather-container{
    height: 400px;
    min-width: 250px;
    width: 50%;
    max-height: 25vh;
  
}
.picture-container
{
    
    min-width: 250px;
    width: 100%;
    max-height: 25vh;
    margin: auto;
}

.fun-pic{
    width: 100%;
    height: 220px;
    
}

.trail-list-container{
    margin-top: 5vh;
    display: grid;
    grid-gap: 3vw;

    
}
.trail-container{
    width: 80%;
    max-height: 280px;
    margin:auto;
    display: flex;
}
.trail-image{
    height: 25vw;
    padding: 1vw;
    min-height: 80px;
    max-height: 250px;

    margin: auto auto auto 5px;
}


.trail-text{
    margin:auto;
  
}

.trail-title{
    font-weight:600;
    font-size: calc(20px + .5vw);
    margin: auto;
    
}
.trail-type{
    padding-bottom: 1vw;
    font-size:calc(8px + .5vw);
    text-decoration: italic;
}
.trail-info{
    font-size:calc(9px + .5vw);
    text-align: left;
    
}
a{
    color: black;
    text-decoration:none;
}
ul{
    list-style:none;
    padding: 0;
    
}

.trail-link{
    color: black;
    font-weight:600;
    font-size: calc(15px + .5vw);
}
.trail-link:hover{
  background-color: var(--lightColor);
  margin: auto;
  border-radius: 20px;
  width:60%;
  min-width: 215px;
    max-width:370px;
    
}
.facebook{
    color: blue;
    padding-left: 20px;
}
.facebook:hover{
    cursor:pointer;
}
.resources{
    width: 75%;
    margin: 3.5vw auto auto auto;
}

.resource-list{
    margin: auto;
    width: 40%;
    min-width: 220px;
    text-align:center;
   
}


`

class TrailList extends Component {
    render(){
        return(      
            <React.Fragment>
                <TrailContainer>
                <div className="top-container">
                    <div className="d-inline-flex">
                        <div className="picture-container article-background ">
                            <img src="./images/Trailside_1.jpg" className="fun-pic" alt="riding-bike"/>
                        </div>
                        <div className="article-background  weather-container text-center">      
                        <Weather/>
                        </div>
                    </div>
                </div>

                <div className="trail-list-container text-center">
                    {localTrails.map((trail, index)=>{
                        return (
                            <div key={index}>
                                <div className="trail-container article-background">
                                    
                                    <img className="trail-image" alt="trail" src={trail.img}/>
                                    <div className="trail-text">
                                        <div className="trail-title">{trail.title}</div>
                                        <div className="trail-type">{trail.type}</div>
                                        <div className="trail-info">{trail.info}</div>
                                        <div className="trail-link"><a href={trail.link} rel="noopener noreferrer"  target="_blank">{trail.title} Website</a></div>        
                                        <div ><a className="trail-link pl-3 pr-3" href={trail.address} target="_blank" rel="noopener noreferrer" >Get Directions</a><span><a className="facebook"href={trail.facebook} rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"/></a></span></div>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                })}
                </div>

                <div className="resources d-flex article-background">
                    <div className="resource-list">
                        <ul>
                            <li><strong>Local Resources</strong></li>
                    {ridingResources.map((resource, index)=>{
                        return (
                            <div key={index}>
                                <div className="resourc-link">
                                   <li><a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.name}</a></li>
                                </div>
                            </div>    
                        )
                    })}
                    </ul>
                    </div>
                    <div className="resource-list">
                        <ul>
                            <li><strong>Other Resources</strong></li>
                            <li><a href="https://www.mtbproject.com/" target="_blank" rel="noopener noreferrer">MTB Project</a></li>
                            <li><a href="https://www.sheldonbrown.com/" target="_blank" rel="noopener noreferrer">Sheldon Brown</a></li>
                            <li><a href="https://ridewithgps.com/" target="_blank" rel="noopener noreferrer">Ride With GPS</a></li>
                        </ul>
                    </div>
                </div>
                </TrailContainer>
            </React.Fragment>
        )

    }
}

export default TrailList

