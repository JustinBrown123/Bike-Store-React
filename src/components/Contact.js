import React, { Component } from 'react'
import {StyledTextContainer} from './StyledTextContainer'
import styled from 'styled-components'
import background from '../background-images/Trailside_170.jpg'

const ContactImage = styled.div `
    
    background-image: url(${background});
    background-repeat: no-repeat;

    background-position: center;
    background-size: contain;
    height: 600px;
    width: 100%;
 
    
    

    .content{
        text-align: center;

        margin-left: auto;
        top: 40px;
        margin-right: 30vw;
        width: 200px;

        height: 300px;
    }
    .contact-logo{
        width: 180px;
    }

`

export default class Contact extends Component {
    render() {
        return (
            
            <ContactImage  >
            
               
            <div className="content" style={{backgroundColor:`var(--lightColor)`}}>
            <img src="../images/Trailside_Logo_Background.png" alt="Home" className="contact-logo"/>
            <h4>Bikeshop Name</h4>
            <p><a href="tel:(330)-509-4362">(330) 509-4362</a></p>
            <h5> Columbus Ohio </h5>
            <a href="http://maps.google.com/?q= 325 S Santa Claus Ln, North Pole, AK 99705"target="_blank" rel="noopener noreferrer" >325 S Santa Claus Ln, North Pole, AK 99705
            </a>
            
                    
            
            </div>

            
            </ContactImage>
             
            
        )
    }
}
