import React, { Component } from 'react'
import {StyledTextContainer} from './StyledTextContainer'



export default class Contact extends Component {
    render() {
        return (
            
            <div className="p-5">
               
            <StyledTextContainer className="w-50 text-center">
            <img src="../images/Trailside_Logo_Background.png" alt="Home" className="navbar-img"/>
            <h4>Bikeshop Name</h4>
            <p><a href="tel:(330)-509-4362">(330) 509-4362</a></p>
            <h5> Columbus Ohio </h5>
            <a href="http://maps.google.com/?q= 325 S Santa Claus Ln, North Pole, AK 99705"target="_blank" rel="noopener noreferrer" >325 S Santa Claus Ln, North Pole, AK 99705
            </a>
            
                    
                
            </StyledTextContainer>

                
            </div>
            
        )
    }
}
