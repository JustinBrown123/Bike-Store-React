import React, { Component } from 'react';
import {partners} from '../partnersData';

import styled from "styled-components"


const PartnerContainer = styled.div`


.page-header{
    color: var(--lightColor);

}
.partner-container{
   width: 98%;
    margin: auto;
    display: grid;
    grid-gap: 7px;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    align-content: center;
}
.partner{
    height: calc(5vw + 360px);  
    width: calc(12vw + 230px);
    padding: 10px;
    align-self:center;
    justify-self:center;
}
.partner-logo{
    display: block;
    margin: auto;
    width: 80%;
    
}
@media (max-width: 768px){
    .page-header{
    color: var(--darkColor);
    font-weight: 800;

}
}
@media (max-width: 550px){
    .partner{
        height: 360px;
    }
    .partner-container{
        width: 100%;
        grid-template-columns: unset;
        grid-template-rows: repeat(auto-fill, minmax(360px, 1fr));
    }
}

`

export default class Partners extends Component {
    render() {
        return (
            <PartnerContainer>
                            <h1 className="text-center text-danger">Under CONSTRUCTION</h1>
                            <div className="page-header article-title pb-4 text-center">Our Partners</div>
                                <div className="partner-container">
                                {partners.map((partner, index)=>{
                                return (
                                    <div className="article-background partner">
                                    <div key={index}>
                                        <img className="partner-logo" src={partner.logo} alt="partner logo"/>
                                        <div className=""><a href={partner.link} className="p-1" target="_blank" rel="noopener noreferrer">{partner.name}</a></div>
                                        <p>{partner.text}</p>
                                        {/* <div className="resource-line"></div> */}
                                    </div>   
                                    </div> 
                                )
                            })}
                            </div>
                            
            


          
                {/* <div className="brand-grid">
                {brands.map((brand, index)=>{
                    return(
                    <div className="item" key={index}>
                        <a href={brand.link}rel="noopener noreferrer"  target="_blank"><img className="brand-size" src={brand.img} alt="brand"/></a>
                    </div>
                    )
                })}
                </div> */}
                
                
       
            </PartnerContainer>
        )
    }
}
