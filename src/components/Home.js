import React, { Component } from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe'

export default class Home extends Component {
    render() {
        return (
            <div>
                

                
                <HomeDiv className="article-background">
                <div className="container">
                    <div className="home-logo-container"><img src="../images/Trailside_Logo_Background.png" className='home-logo' alt='logo'/></div>

                    <div className="row pb-3">
                        <div className="col-lg-8">
                            <div className="home-image-col">
                                <img src="../images/Trailside_Outside.jpg" alt=''className="home-image" />
                                <div className="address-link" >
                                <a className="address" href="http://maps.google.com/?q= 6685 Kirk Rd, Canfield, OH 44406"target="_blank" rel="noopener noreferrer" >6685 Kirk Rd, Canfield, OH 44406 </a><span> | </span><span><a className="address" href="tel:(330)-503-4690"> (330) 503-4690</a></span>
                            </div> </div>
                        </div>
                        <div className="col-lg-4 time-col">
                            <div className="time-container m-auto">
                                <div className="article-title time-title">Hours of Operation</div>
                                <ul className="hours-list article-text list-unstyled">
                                    <li className="hours">Monday: closed</li>
                                    <li>Tuesday: 11-6</li>
                                    <li>Wednesday: 11-6</li>
                                    <li>Thursday: 11-6</li>
                                    <li>Friday: 11-6</li>
                                    <li>Saturday: 11-5</li>
                                    <li>Sunday: 12-4</li>
                                    <li></li>
                                   
                                </ul>
                                
                            </div>
  
                        </div>
                    </div>
                


                <div className="row">
                    <div className="col-lg-6">
                        <div className="home-article article-text">
                            <div className="text-center article-title">
                        Here at Trailside Bicycle Company
                            </div>
                            <div className="text-center">
                                Trailside Bicycle Company of Youngstown is located at the Kirk road trailhead on the Millcreek metro parks bike way.
                                <br/> We offer full service on any brand of bike and offer sales of new and used bikes.
                                <br/>Trailside is open year around to service all the bikers, walkers and runners on the trail. We have all your needs from cycling accessories and apparel to drinks, snacks and supplements. Stop in any time to check us out!!
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="facebook-col">
                            <div className="article-title">Keep up with us on facebook</div>
                            <Iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrailsidebicycle2020&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" className="m-auto facebook-content"  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></Iframe> 
                        </div>

                    </div>


                
                
                
                
                
                   </div>
                </div>

                <div className="article-signature">
                   <p><span className="signature-header"> Owner:</span><span className="article-title">Tim Knight</span></p>
                </div>
                </HomeDiv>
                
            </div>
            
        )
    }
}
const HomeDiv = styled.div`
    margin: auto;
    padding: 2vw;

    text-align: center;
    width: 70%;
    
    .address{
        
        color: black;
    }
    .address-link{
        text-align: center;
        
        width: 100%;
        font-size: 12px;
    }
    .home-logo{
        padding-bottom: calc(2vw + 8px);
        width: 20vw;
        min-width: 130px;
        max-width: 270px;
    }
    .time-col{
    display:flex;
    justify-content:center;
    align-items:center;

    }
    .time-container{
    width: 80%;

    border:solid black 1px;
    border-radius: 20px;
    }
    .time-title{
        font-size: calc(.5vw + 8px);
    }
    .hours-list{
        font-size: calc(.5vw + 10px);
        
    }

    .home-article{
        margin: auto;
        width:90%;
    }
    .article-signature{
        padding: 3vw 2vw 0 ;
        text-align: center;

    }
    .home-image-col{
        display:block;
        /* justify-content:center;
        align-items:center; */

    }
    .home-image{
        
        margin:auto;
        width: 100%;
        

    }
    .signature-header{
        font-size: calc(1vw + 10px)

    }
    .facebook-content{
        width: 340px;
        height: 400px;
    }
    @media(max-width: 1050px){

    .facebook-col{
        margin-left: -15px;
    }

    }
    @media(max-width: 990px){
        .facebook-col{
            margin-left: unset;
        }
        .home-image-col{
        padding-bottom: 20px;
    }

    .time-container{
    width: 50%;}
    }
    @media(max-width: 768px){

        .facebook-col{
            margin-top: 15px;
        }
    }
  
    @media(max-width: 560px){
        width: 98%;
        .facebook-content{
            margin: auto;
            width: 100%;
        }
        .container{
            width: 100% !important;
        }
    }
    


`
