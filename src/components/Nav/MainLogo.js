import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ColorLogo = styled.div`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;

    img{
        min-width: 80px;
        width: 20vw;
        max-width: 200px;
    }


`

const MainLogo = ()=> {
    return (
        <ColorLogo>
            <Link to ='/'><img src="../images/Bike-logo.png" alt="Home" className="navbar-img"/></Link>
        </ColorLogo>
    )
}

export default MainLogo
