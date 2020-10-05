import React, {useState} from 'react';
import MainLogo from './MainLogo'
import styled from 'styled-components';
import {StyledBurger} from './BurgerMenu';
import {Link} from 'react-router-dom'
import {NavList} from './NavList'
import {NavCss} from './NavCss'



const NavWrapper= styled.nav`
z-index: 7;
@media (max-width: 768px){
    height: 50px;
    width: 100%;
    background-color: var(--lightColor);
    position: fixed;
}
`

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const showNavbar = () => setOpen(!open)


        return (
            <>
            <MainLogo/>

            <div>       
                <StyledBurger open={open} onClick={showNavbar}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </StyledBurger>
                </div>
            <NavWrapper>
                <NavCss open={open} onClick={showNavbar}>
                <li className="nav-title text-title">Pedal Works</li>
                <li className="breaker-line"></li>        
                    {NavList.map((item, index) => {
                        return(
                            <li key={index} className="nav-item text-title">
                                <Link to={item.path} className={item.cName}>{item.title}</Link>
                            </li>
                        )
                    })}
                </NavCss>
            </NavWrapper>
            </>

        )
    }
