import React, { Component } from 'react'
import {StyledTextContainer} from './StyledTextContainer';
import {localTrails} from '../trailData';
import Weather from './Weather';
import styled from 'styled-components'

const TrailContainer = styled.div` 
.top-section{
    border-radius: 20px;
    background-color: rgba(250, 250, 250, 0.7);
    width: 60%;
    margin: auto;

}
.trail-list-container{
    margin-top: 5vh;
}
`

class TrailList extends Component {
    render(){
        return(

            
            <React.Fragment>
                <TrailContainer>
                <div className="top-section text-center p-4">
                
                <Weather/>
                
                {/* Maybe a club or something about downloading youngstowns favorite routes
                <h4>GPX downloads/Strava etc</h4> */}
                </div>

                <div className="trail-list-container text-center">
                    {localTrails.map((trail, index)=>{
                        return (
                            <div key={index}>
                                <StyledTextContainer>
                                    <h1>{trail.title}</h1>
                                    <img className="HomeImages" alt="trail" src={trail.img}/>
                                    <h5>{trail.type}</h5>
                                    <p>{trail.info}</p>
                                    <a href={trail.link} className="icon-link nav-link" rel="noopener noreferrer"  target="_blank">{trail.title} Website</a>
                                </StyledTextContainer>
                            </div>
                        )
                })}
                </div>
                </TrailContainer>
            </React.Fragment>
        )

    }
}

export default TrailList

