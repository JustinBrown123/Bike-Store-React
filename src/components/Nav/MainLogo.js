import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ColorLogo = styled.div`
    z-index: 7;
    position: fixed;
    top: 5px;
    left: 30px;

    .navbar-img{
        min-width: 70px;
        width: calc(5vw + 40px);
        max-width: 130px;
        display: block;
    }
    @media (max-width: 1205px){
        top: .5vw;
        left: calc(.5vw + 5px);
    }
    @media(max-width: 768px){
        width: 100%;
        left: unset;
        top: 2px;

        .navbar-img{
            margin: auto;
         
            width: 90px;
           
        }


    }


`

const MainLogo = ()=> {
    return (
        <ColorLogo>
            <Link to ='/'><img src="../images/Trailside_Logo_Background.png" alt="Contact-us" className="navbar-img"/></Link>
        </ColorLogo>
    )
}

export default MainLogo
