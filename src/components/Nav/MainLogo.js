import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ColorLogo = styled.div`
    z-index: 7;
    position: fixed;
    top: 5px;
    left: 30px;

    .navbar-img{
        min-width: 80px;
        width: 130px;
       
        display: block;
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
            <Link to ='/'><img src="../images/Trailside_Logo_Background.png" alt="Home" className="navbar-img"/></Link>
        </ColorLogo>
    )
}

export default MainLogo
