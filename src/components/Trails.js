import React, { Component } from 'react'
import {StyledTextContainer} from './StyledTextContainer';
import PropTypes from 'prop-types'
import {localTrails} from '../trailData';

class TrailList extends Component {
    render(){
        return(
            
            <React.Fragment>
                <div className="text-center p-4">
                Maybe a club or something about downloading youngstowns favorite routes
                <h4>GPX downloads/Strava etc</h4>
                </div>
                <div className="text-center">
                    todays weather</div>
                <div className="text-center">
                    {localTrails.map((trail)=>{
                        return (<StyledTextContainer>
                            <h1>{trail.title}</h1>
                            <img className="HomeImages" src={trail.img}/>
                            <h5>{trail.type}</h5>
                            <p>{trail.info}</p>
                            <a href={trail.link} class="icon-link nav-link" target="_blank">{trail.title} Website</a>
                        </StyledTextContainer>)
                })}
                </div>
            </React.Fragment>
        )

    }
}

export default TrailList