import React, { Component } from 'react'
import {StyledTextContainer} from './StyledTextContainer';
import {localTrails} from '../trailData';
import Weather from './Weather';

class TrailList extends Component {
    render(){
        return(
            
            <React.Fragment>
                <div className="text-center p-4">
                
                <Weather/>
                
                Maybe a club or something about downloading youngstowns favorite routes
                <h4>GPX downloads/Strava etc</h4>
                </div>

                <div className="text-center">
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
            </React.Fragment>
        )

    }
}

export default TrailList