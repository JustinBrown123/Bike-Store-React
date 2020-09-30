import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class NavBar extends Component {
    render() {
        return (
            
            <NavWrapper className ="navbar navbar-dark  navbar-expand-sm px-sm-5">
                <Link to ='/'><img src="../images/Bike-logo.png" alt="Home" className="navbar-img"/></Link>
                <div className="nav-items">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                                <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/news" className="nav-link">News</Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to ="/wheretoride" className='nav-link'>Lets Ride</Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
               </div>
                
            </NavWrapper>
        )
    }
}
const NavWrapper= styled.nav`

    background: var(--darkColor);
    height: calc(50px + 1vw);
    .navbar-img{
        position: absolute;
        left: 1rem;
        top: 0;
        width: calc(90px + 5vw);
    }
    .nav-items{
        position:absolute;
        left: calc(100px + 5vw);
    }
    .nav-link{
        color: var(--lightColor);
        font-size: calc(15px + .5vw);
        text-transform: capitalize;
    }
    .nav-link:hover{
        transform: scale(1.25);
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    }
`