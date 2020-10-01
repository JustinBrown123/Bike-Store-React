import React from 'react';

import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';


const NavWrapper= styled.nav`

`



export const Navbar = () => {


        return (
            
            <NavWrapper>
                
                <BurgerMenu/>
            </NavWrapper>
        )
    }

    // background: var(--darkColor);
    // height: calc(50px + 1vw);
    // .navbar-img{
    //     position: absolute;
    //     left: 1rem;
    //     top: 0;
    //     width: calc(90px + 5vw);
    // }
    // .nav-items{
    //     position:absolute;
    //     left: calc(100px + 5vw);
    // }
    // .nav-link{
    //     color: var(--lightColor);
    //     font-size: calc(15px + .5vw);
    //     text-transform: capitalize;
    // }
    // .nav-link:hover{
    //     transform: scale(1.25);
    //     box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    // }