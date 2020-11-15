import React, { Component } from 'react';
import {localTrails} from '../trailData';
// import Weather from './Weather';
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
    width: 25vw;
    max-height: 15vh;
  
}
.picture-container
{
    
    min-width: 250px;
    width: 50%;
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
@media (max-width: 767px){
    .trail-info{
        display: none;
    }
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
    width: 40%;
    margin: 3.5vw auto auto auto;
    min-width: 300px;
}

.resource-list{
    margin: auto;
    width: 40%;
    min-width: 220px;
    text-align:center;
   
}
.resource-title{
    font-weight:600;
    font-size: calc(20px + .5vw);
    margin: auto;
    padding-bottom: .7vw;
}
.local-resource{
    margin: auto;
    width: 50%;
    

}
.resource-link{
    font-size: calc(.5vw + 13px);
    font-weight: 400;
    width: 70%;
    margin: auto;
    text-align:center;
}
@media (max-width: 767px){
    .resource-link{
        font-size: calc(.5vw + 10px);
        width: 100%;
    }
    .resource-title{
    
    font-size: calc(16px + .5vw);
  
}
}
.resource-link:hover{
    transform: scale(1.25);
    background-color: var(--lightColor);
    border-radius: 20px;
}
@media (max-width: 580px){
    .resource-line{
        background-color: black;
        height: 1px;
        width: 50%;
        margin: auto auto 2px auto;
    }
}


`

class TrailList extends Component {
    render(){
        return(      
            <React.Fragment>
                <TrailContainer>
                {/* <div className="top-container">
                    <div className="d-inline-flex">
                        <div className="picture-container article-background ">
                            <img src="./images/Trailside_1.jpg" className="fun-pic" alt="riding-bike"/>
                        </div>
                        <div className="article-background  weather-container text-center">      
                        <Weather/>
                        </div>
                    </div>
                </div> */}
                 <div className="trail-list-container">
                     <div className="trail-container article-background">                      
                       
                        
                        <div className="local-resource">
                        <div className="resource-title text-center">Local Resources</div>
                            {ridingResources.map((resource, index)=>{
                                return (
                                    <div key={index}>
                                        
                                        <div className="resource-link"><a href={resource.link} className="p-1" target="_blank" rel="noopener noreferrer">{resource.name}</a></div>
                                        {/* <div className="resource-line"></div> */}
                                    </div>    
                                )
                            })}
                        </div>
                        <img className="trail-image" alt="ohio" src="/images/OhioBicycle.png"/>
                    
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
               
                <div className="resources article-background ">
                    <div className="p-2 resource-list">
                        <ul>
                            <li className="resource-title">Other Resources</li>
                            <li><a className="resource-link" href="https://www.ohiogravelgrinders.com/" target="_blank" rel="noopener noreferrer">Ohio Gravel Grinders</a></li>
                            <li><a className="resource-link" href="https://www.mtbproject.com/" target="_blank" rel="noopener noreferrer">MTB Project</a></li>
                            <li><a className="resource-link" href="https://www.sheldonbrown.com/" target="_blank" rel="noopener noreferrer">Sheldon Brown</a></li>
                            <li><a className="resource-link" href="https://ridewithgps.com/" target="_blank" rel="noopener noreferrer">Ride With GPS</a></li>
                        </ul>
                    </div>
                </div>
                </TrailContainer>
            </React.Fragment>
        )

    }
}

export default TrailList

