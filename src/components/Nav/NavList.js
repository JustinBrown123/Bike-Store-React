export const NavList =[

    {
        title: 'Home',
        path: '/',
        cName: 'nav-link'
    },
    {
        title: 'News',
        path: '/news',
        cName: 'nav-link'
    },
    {
        title: 'Lets Ride',
        path: '/wheretoride',
        cName: 'nav-link'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        cName: 'nav-link'
    }

]




// const Nav = styled.ul `
// z-index: 10;
// list-style:none;
// display: flex;
// flex-flow: row nowrap;
// background-color: var(--darkColor);
// justify-content:center;


// li{
//     padding: 10px;

// }

// .nav-link{
//     text-decoration:none;
//     font-size: calc(1vw + 8px);
//     color: white;
//     font-weight: 800;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     position: relative;
//     padding: 3px 1vw;
//     margin: 2px;
// }

// .nav-title{
//   display: none;
// }
// .breaker-line{
//     display:none;
// }

//  .nav-link:hover{
//     color: var(--lightColor);
//     box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
//     border-radius: 5px;
//     transform: scale(1.25);
    
//  }



// @media (max-width: 768px){
    
//     flex-flow: column  nowrap;
//     background-color: #267272; 
//     background-image: url("./binding_dark/binding_dark.png");


//     position: fixed;
//     transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
//     top: 0;
//     right: 0;
//     height: 70vh;
//     width: calc(150px + 20vw);
//     padding-top:3.5rem;
//     transition:transform 0.3s ease-in-out;
//     justify-content: unset;
//     align-items: center;
//     border-radius: 20% 0 0 60%;
    
//     li{
//         color: var(--lightText);
//     }
//     .breaker-line{
//     width: 85%;
//     padding: 1px;
//     margin: 2vh 0;
//     background-color: var(--lightText);
//     display: unset;
//     }
//     .nav-title{
//     margin-top: 3vh;
//     font-size: calc(1vw + 10px);
//     font-weight: 800;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     position: relative;
//     padding: 3px 0;
//     display: unset;
// }

// .nav-link::before,
// .nav-link::after{
//   content: "";
//   height: 1.5px;
//   width: 100%;
//   padding: 0;
  
//   background-color: var(--lightColor);
//   position: absolute;
//   left: 0;
//   transform: scaleX(0);
//   transition: transform 0.5s;
// }

// .nav-link::after{
//     bottom: -2px;
//     transform-origin: right;
// }
// .nav-link::before{
//     top: -2px;
//     transform-origin: left;
// }

// .nav-link:hover::before,
// .nav-link:hover::after{
//     transform: scaleX(1);
   
// }
// .nav-link:hover{
//     color: var(--lightColor);
//     box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0);
//     transform: scale(1);
    
//  }



// }
// `

// const NavList=({open}) => {
//     return (
        
//         <Nav open={open}>
//                 <li className="nav-title text-title">Pedal Works</li>
//                 <li className="breaker-line"></li>
//                 <li className="nav-item text-title">
//                     <Link to="/" className="nav-link" >Home</Link>
//                 </li>
//                 <li className="nav-item text-title">
//                     <Link to="/news" className="nav-link">News</Link>
//                 </li>
//                 <li className="nav-item text-title">
//                     <Link to ="/wheretoride" className='nav-link'>Lets Ride</Link>
//                 </li>
//                 <li className="nav-item text-title">
//                     <Link to="/contact" className="nav-link">Contact Us</Link>
//                 </li>
//             </Nav>
        
//     )
// }

// export default NavList