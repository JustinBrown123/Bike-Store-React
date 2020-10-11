import React, { Component } from 'react'
import styled from 'styled-components'


const ContactDiv = styled.div `
    height: 65vh;
    .contact-wrapper{
    margin: 10vh auto auto auto;
    
    border-radius:10px;
    text-align: center;
    padding: 3vw;

    background-color: rgba(250,250,250, 0.8);
    width: calc(6vw + 200px);
    }
    @media(max-width: 768px){
        .contact-wrapper{
        width: calc(4vw + 200px);
       }
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


`

export default class Contact extends Component {
    render() {
        return (
            
            <ContactDiv>
                <div className="contact-wrapper">
            
                    
                
                <h3 className="content-title">Contact us</h3>
                <div className="content-title">phone</div>
                <div className="content-text"><a className="content-link" href="tel:(330)-503-4690">(330) 503-4690</a></div>
                <div className="content-title">Email</div>
                <div className="content-text"><a className="content-link" href="mailto: trailsidebicycle@gmail.com" >trailsidebicycle@gmail.com</a>
                </div><div className="content-title"> Visit Us </div>
                <div className="content-text"><a className="content-link" href="http://maps.google.com/?q= 6685 Kirk Rd, Canfield, OH 44406"target="_blank" rel="noopener noreferrer" >6685 Kirk Rd, Canfield, OH 44406
                </a></div>
            
                </div>
         
            </ContactDiv>
                    
         
            
        )
    }
}
