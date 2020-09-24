import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <div className="d-flex justify-content-center text-center ">
                    <img src={logo} className='logo' alt='logo'/>
                </div>
                <div className="d-flex justify-content-center text-center ">
                    &copy; Bike &amp; Dog 2020
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