import styled from 'styled-components'

export const NavCss = styled.ul `

z-index: 6;
height: calc(1vw + 50px);
list-style:none;
display: flex;
flex-flow: row nowrap;
background-image: url('../images/binding_dark/binding_dark.png'); 
justify-content:center;
margin-bottom: 0;
position:fixed;
width: 100%;
top:0;


li{
    padding: 10px;
}


.nav-link{
    text-decoration:none;
    font-size: calc(1vw + 8px);
    color: var(--lightText);
    font-weight: 800;
    letter-spacing: 1px;

    text-transform: uppercase;
    position: relative;
    padding: 3px 2vw;
    margin: 2px;
}
@media(max-width: 1080px){
    .nav-link{
        padding: 5px .7vw;       
    }
}
@media (max-width: 820px){
    .nav-link{
        font-size: calc(1vw + 6px);
        padding: 6px .5vw;
    }
}


.nav-title{
  display: none;
}
.breaker-line{
    display:none;
}

 .nav-link:hover{
    color: var(--lightText);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    transform: scale(1.25);
    
 }



@media (max-width: 768px){
    
    background-image: url('../images/binding_dark/binding_dark.png');
    border: double var(--lightColor);
    flex-flow: column  nowrap;
    background-color: var(--darkColor); 
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 70vh;
    width: calc(130px + 20vw);
    padding-top:2.5rem;
    transition:transform 0.3s ease-in-out;
    justify-content: unset;
    align-items: center;
    border-radius: 20% 0 0 60%;
    .nav-link{
        padding:0;
    }
    
    li{
        color: var(--lightText);
    }
    .breaker-line{
    width: 85%;
    padding: 1px;
    margin: 2vh 0;
    background-color: var(--lightText);
    display: unset;
    }
    .nav-title{
    width: 120px;

    position: relative;
    
    display: unset;
}

.nav-link::before,
.nav-link::after{
  content: "";
  height: 1.5px;
  width: 100%;
  padding: 0;
  
  background-color: var(--lightText);
  position: absolute;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.5s;
}

.nav-link::after{
    bottom: -2px;
    transform-origin: right;
}
.nav-link::before{
    top: -2px;
    transform-origin: left;
}

.nav-link:hover::before,
.nav-link:hover::after{
    transform: scaleX(1);
   
}
.nav-link:hover{
    color: var(--lightText);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0);
    transform: scale(1);
    
 }



}



`


