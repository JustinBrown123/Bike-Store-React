import React, { Component } from 'react'
import styled from 'styled-components'


export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <div className="d-flex justify-content-center text-center ">
                    <img src="../images/Trailside_Logo_Background.png" className='logo' alt='logo'/>
                </div>
                <div className="d-flex justify-content-center text-center ">
                    &copy; Trailsid Bicycle Company
                </div>
                
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.div`
    margin-top: 5vh;
    width: 100%;
    bottom: 0;
    font-size: 1rem;
    .logo{
        width: 5rem;
    }

`