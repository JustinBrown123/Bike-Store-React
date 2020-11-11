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
                <div className="text-center footer-contact p-1">
                    <Link to ='/contact' className="link"><strong >Contact Us</strong></Link>
                </div>
                <div className="text-center">
                     Trailside Bicycle Company
                </div> 
                <div className="text-center ">
                     Est. 2020
                </div>    
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
    }

`