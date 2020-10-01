import React, { useState } from 'react'

import styled from 'styled-components'
import MainLogo from './MainLogo'
import NavList from './NavList'



const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 25px;
    right: 20px;
    z-index: 20;
    display: none;
    :hover{
        cursor: pointer;
    }

    @media (max-width: 768px){
        display: flex;
        justify-content: space-around;
    flex-flow:  column nowrap;
    }

    .line{
        width:2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin:1px;
        transition: all 0.3s;

        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open})=> open ? '0' : '1'};

        }
        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }


`


const BurgerMenu  = () => {
    const [open, setOpen] = useState(false)
        return (
                <div>
                <MainLogo/>
                <StyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </StyledBurger>
                <NavList open={open}/>
                </div>
            
        )
    }



export default BurgerMenu