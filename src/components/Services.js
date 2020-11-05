import React, { Component } from 'react'
import styled from 'styled-components'

const ServiceContainer = styled.div`

height: 80vh;
    .service-section{
        margin: auto;
        height: 70vh;
   
    }
    .services-header{
        width: 100%;
        text-align:center;
        margin-bottom: .5vw;
        font-size: calc(.5vw + 18px);
        font-weight: 400;
    }
    .service-info{
        display:block;
        width: 80%;
        height: auto;
        
        margin:auto;
        color: white;
    }
    .chalkboard{
        background-image: url("./images/chalkboard.jpg");
        background-repeat:no-repeat; 
        background-size: 90% 90%;
        background-position: center;
        padding: calc(3vw + 19px) 0 0 0;
        
        font-family: 'Rock Salt', cursive;
     }
     .line{
         background-color: white;
         height: 2px;
         width: 80%;
         margin: auto auto 1.5vw auto;
         
     }
    ul{
        list-style-type: none;
        width: 100%;
        

        
        
    }
    .service-list{
        font-size: calc(.5vw + 12px);
        padding: 2px;
    }
    a{
        text-decoration:none;
        color: black;
        font-size: 8px;
        
        text-align: center;
        
    }
    a:hover{
        cursor: default;
    }

    .rental-img{
        padding:5%;
        display: block;
        margin: auto;
        width: 60%;    
    }




`
export default class Services extends Component {
    render() {
        return (
            <ServiceContainer className="container"> 
                <div className="row">
                    <div className="col-lg-6">
                        <div className="service-section chalkboard article-background">
                            
                            <div className="service-info"> 
                                <div className="services-header">Service Department</div> 
                                <div className="line"></div>
                                   
                                    <ul>
                                        <li className="service-list list-header">Full tune up is $60.00.</li>
                                        <li className="service-list">Full service</li>
                                        <li className="service-list">Wheel truing </li>
                                        <li className="service-list">Custom bike builds</li>
                                        <li className="service-list">Service all brands</li>
                                        <li className="service-list">Brake service</li>
                                        <li className="service-list">Derailleur adjustments </li>
                                     
                                    </ul> 
                                </div> 
                                
                            </div>
                            <div className="pl-5">
                                <a href="https://www.freepik.com/photos/background">Chalkboard Background photo created by benzoix - www.freepik.com</a>
                            </div>
                        </div>
                        
                   
                    <div className="col-lg-6">                           
                        <div className="service-section article-background">
                                <a href="https://www.freepik.com/photos/background">Background photo created by benzoix - www.freepik.com</a>
                            <div className="services-header">Rentals</div>
                            <div className="service-info"> 
                                <ul>
                                    <li className="service-list">Rent a bike</li>
                                    <li className="service-list">terms</li>
                                    <li className="service-list">nothing</li>
                                </ul>
                                <img className='rental-img' src='../images/Trailside_10.jpg' alt='rental-bikes'/>
                            </div>
                         
                        <div>
                        </div>
                    </div> 

                </div>
                      
            </div>
               
                
            </ServiceContainer>
        )
    }
}
