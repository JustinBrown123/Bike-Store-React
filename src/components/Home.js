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

                    <div className="row pb-5">
                        <div className="col-lg-8">
                            <div className="home-image-col">
                                <img src="../images/Trailside_Outside.jpg" alt=''className="home-image" />
                            </div>
                        </div>
                        <div className="col-lg-4 time-col">
                            <div className="time-container m-auto">
                                <div className="article-title time-title">Hours of Operation</div>
                                <ul className="hours-list article-text list-unstyled">
                                    <li className="hours">Monday: 10-6</li>
                                    <li>Tuesday: 10-6</li>
                                    <li>Wednesday: Closed</li>
                                    <li>Thursday: 10-6</li>
                                    <li>Friday: 10-6</li>
                                    <li>Saturday: 10-5</li>
                                    <li>Sunday: 10-6</li>
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
                        Here at TrailSide Bicycle we offer all the services for your bicycle needs. Come in and we can help you get cycling in no time, wether its bumming around the parks or getting ready for a bicycle tour across the country. We'll take care of you and get you back on the trail. 
                        <br/>
                        <br/>
                        Marshall Walter "Major" Taylor (November 26, 1878 – June 21, 1932) was an American professional cyclist. He was born and raised in Indianapolis, where he worked in bicycle shops and began racing multiple distances in the track and road disciplines of cycling. As a teenager, he moved to Worcester, Massachusetts, with his trainer and had a successful amateur career, which included breaking track records.
                        
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
        font-size: calc(.5vw + 7px);
    }
    .hours-list{
        font-size: calc(.5vw + 5px);
        
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
        display:flex;
        justify-content:center;
        align-items:center;

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
