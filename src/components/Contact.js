import React, { Component } from 'react'
import styled from 'styled-components'
import background from '../background-images/Trailside_170.jpg'
import WoodBackground from '../background-images/tileable_wood.png'

const ContactImage = styled.div `
    
    background-image: url(${background});
    background-repeat: no-repeat;

    background-position: center;
    background-size: contain;
    min-height: 600px;
    width: 100%;
 
    
    

    .content-background{
    background-image: url(${WoodBackground});

    
        position: absolute;
        text-align: center;
        left: 58vw;
        top: 27vh;
       
        width: 260px;
        height: 300px;
        box-shadow: 0 0 8px 8px rgba(0, 0, 0, .3) inset;
        border: black 0.5px solid;

    }

    .content{
        width: 100%;
        height: 100%;
        
        background-color: rgba(0,0,0,0.15);
        padding: 15px;

    }
    .contact-logo{
        width: 180px;
    }
    .content-title{
        padding-top: 15px;
        font-family: 'Rock Salt', cursive;
        font-weight: 800;
    }
    .content-link{
        color: black;
        text-decoration:none;

    }
    .content-text{

        transition: all 0.2s ease;
    }
    .content-text:hover{
        width: 90%;
        margin: auto;
        font-weight: 500;
        transform: scale(1.25);
        background-color: rgba(127, 181, 202, .5);
        border-radius: 5px;
        
    }
    @media( max-width: 768px){
        background-image: none;
        width: 100%;
        
        padding: 50px;
        min-height:400px;
        .content-background{
        position: relative;
        left: unset;
        top: unset;
        margin: auto;

       
            
        }
    }

`

export default class Contact extends Component {
    render() {
        return (
            
            <ContactImage  >
            
               
            <div className="content-background" style={{backgroundColor:`var(--lightColor)`}}>
                <div className="content">
            {/* <img src="../images/Trailside_Logo_Background.png" alt="Home" className="contact-logo"/> */}
                <div className="content-title">Contact Us at:</div>
                <div className="content-text"><a className="content-link" href="tel:(330)-503-4690">(330) 503-4690</a></div>
                <div className="content-title">Email: </div>
                <div className="content-text"><a className="content-link" href="mailto: trailsidebicycle@gmail.com" >trailsidebicycle@gmail.com</a>
                </div><div className="content-title"> Located At </div>
                <div className="content-text"><a className="content-link" href="http://maps.google.com/?q= 6685 Kirk Rd, Canfield, OH 44406"target="_blank" rel="noopener noreferrer" >6685 Kirk Rd, Canfield, OH 44406
                </a></div>
            </div>
                    
            
            </div>

            
            </ContactImage>
             
            
        )
    }
}
