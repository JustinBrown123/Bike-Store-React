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
                <div className="d-flex justify-content-center text-center ">
                     Trailside Bicycle Company
                </div> <div className="d-flex justify-content-center text-center ">
                     Est. 2020
                </div>    
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.div`
    color: white;
    margin-top: 5vh;
    margin-bottom: 5px;
    width: 100%;
    font-size: 10px;
    .logo{
        width: 80px;
    }

`