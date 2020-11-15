import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <div className="d-flex justify-content-center text-center ">
                    <Link to ='/contact'><img src="../images/Trailside_Logo_Background.png" className='logo' alt='logo'/></Link>
                </div>             
                <div className="text-center pt-1 footer-contact">
                    <Link to ='/contact' className="link"><strong >Contact Us</strong></Link>
                </div>
                
                <div className="text-center">
                     Trailside Bicycle Company
                </div> 
                <div className="text-center ">
                     Est. 2020
                </div> 
                <div className="icon text-center">
                    <a href="https://www.facebook.com/trailsidebicycle2020" target="blank" rel="noopener noreferrer"><i class="social facebook pr-2 fab fa-facebook"></i></a> 
                    <a href="https://www.instagram.com/trailsidebicycle/" target="blank" rel="noopener noreferrer"><i class="social instagram fab fa-instagram "></i></a> 
                    <a href="https://www.linkedin.com/in/timothy-knight-b1a5b01ba/" target="blank" rel="noopener noreferrer"><i class="social facebook pl-2 fab fa-linkedin"></i></a> 
                </div> 
                <div className="p-1"></div>  
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.div`
    color: white;
    margin-top: 4vh;
    width: 100%;
    font-size: 10px;
    .footer-contact{
        font-size: 14px;
        color: white !important;
        text-decoration:none;
    }
    .icon{
        margin: auto;
        font-size: 20px;
        width: 100px;
        background-color: rgba(250,250,250, .5);
        border-radius: 20px;
      
        

    }
    .facebook{
        color:blue;
    }
    .instagram{
        color:purple;
    }
    .link{
        color: white !important;
        text-decoration:none;

    }
    .logo{
        width: 80px;
    }
    @media(max-width: 768px){
        color: black;
        .link{
        color: black !important;
     
        }
        .icon{
            background-color: unset;
        }
    }

`