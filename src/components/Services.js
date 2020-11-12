import React, { Component } from 'react'
import styled from 'styled-components'

const ServiceContainer = styled.div`
min-height: 80vh;
height: auto;
margin: auto;

    .rental-info{
        padding: 1vw;
    }

    .service-section{
        margin: auto;
        height: 40vw;
        min-width:250px;
        
        
        
    }


    .services-header{
        font-family: 'Rock Salt', cursive;
        width: 100%;
        letter-spacing: calc(.15vw + .5px);
        
        text-align:center;
        padding: .75vw;
        font-size: calc(.5vw + 20px);
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
    .rental-image-container{
        margin: auto;
        background-image: url("./images/RentalBikes.jpg");
        background-repeat:no-repeat; 
        background-size: cover;
        background-position: center;
        width: 90%;
        height: 25vw;
        
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
        font-size: calc(.5vw + 14px);
    }
    .rental-list{
      
        font-size: calc(.5vw + 10px);
    }
    .rental-list-title{
        font-weight: 700;
        font-size: calc(.5vw + 15px);
    }
    .chalboard-source{
        padding-top: 5vw;
        

    }
    a{
        
        font-family:'Times New Roman', Times, serif;
        text-decoration:none;
        color: black;
        font-size: 8px;
        text-align: center;
        
    }
    a:hover{
        cursor: default;
    }

    @media (max-width: 767px){
        a{
            color: white;
        }
    }

    @media(max-width: 800px){
        .service-section{
            
            height: 52vw;
            min-height: 300px;
            
        }
        .small-rental{
 
            padding: 3vw!important;
        }
        .service-list{
        font-size: calc(.5vw + 12px);
    }

}


`
export default class Services extends Component {
    render() {
        return (
            <ServiceContainer className="container"> 
                <div className="row">
                    <div className="col-lg-6 pb-3">
                        <div className="service-section chalkboard article-background">
                            
                            <div className="service-info"> 
                                <div className="services-header">Service Department</div> 
                                <div className="line"></div>
                                   
                                    <ul>
                                        <li className="service-list">Full tune up is $60</li>
                                        <li className="service-list">Full service</li>
                                        <li className="service-list">Wheel truing </li>
                                        <li className="service-list">Custom bike builds</li>
                                        <li className="service-list">Service all brands</li>
                                        <li className="service-list">Brake service</li>
                                        <li className="service-list">Derailleur adjustments </li>
                                     
                                    </ul> 
                                   
                                </div> 
                                
                            </div>
                          
                        </div>
                        
                   
                    <div className="col-lg-6 ">                           
                        <div className="service-section article-background">
                            
                            
                            <div className="services-header small-rental">Rentals</div>
                            <div className=" rental-image-container">
                                {/* <img className='rental-img' src='../images/RentalBikes.jpg' alt='rental-bikes'/> */}
                            </div>      
                            <div className="rental-info small-rental">                     
                                    <div className="rental-list-title text-center">Rentals are $8.00 an hour</div>
                                    <div className="rental-list text-center">Rentals are only available<br /> during business hours.</div>
                                    
                            </div>
                         
                        <div>
                        </div>
                    </div> 

                </div>
                      
            </div>
               
            <div className="chalboard-source">
                                <a href="https://www.freepik.com/photos/background">Chalkboard Background photo created by benzoix - www.freepik.com</a>
                            </div>
            </ServiceContainer>
        )
    }
}
