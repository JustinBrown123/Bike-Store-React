import React, { Component } from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe'

export default class Home extends Component {
    render() {
        return (
            <div>
                

                
                <HomeDiv>
                <div className="container">

                
                


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

                <div className="row">
                    <div className="home-image">
                        <img src="../images/Trailside_Outside.jpg" alt=''className="HomeImages" />
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
    border-radius: 10px;
    text-align: center;
    width: 70%;
    background: rgba(250, 250, 250, .7);
    .home-article{
        margin: auto;
        width:90%;
    }
    .article-signature{
        padding: 3vw 2vw 0 ;
        text-align: center;

    }
    .home-image{
        margin:auto;
        width: 100%;
        margin-top: 3vw;
    }
    .signature-header{
        font-size: calc(1vw + 10px)

    }
    .facebook-content{
        width: 340px;
        height: 400px;
    }
    @media(max-width: 768px){

        .facebook-col{
            margin-top: 15px;
        }
    }
    @media(max-width: 560px){
        width: 100%;
        .facebook-content{
            margin: auto;
            width: 100%;
        }
        .container{
            width: 100% !important;
        }
    }
    


`
