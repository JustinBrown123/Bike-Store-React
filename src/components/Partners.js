import React, { Component } from 'react';
import {partners} from '../partnersData';

import styled from "styled-components"


const PartnerContainer = styled.div`


.page-header{
    color: var(--lightColor);
    font-weight: 800;
    padding-bottom: 2vw;

}
.partner-container{
   width: 98%;
    margin: auto;
    display: grid;
    grid-gap: 7px;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    align-content: center;
}
.partner{
    height: calc(7vw + 360px);  
    width: calc(12vw + 230px);
    padding: 10px;
    align-self:center;
    justify-self:center;
}
.img-container{
    height: calc(5vw + 130px);
    display: flex;
  
   
}
.partner-logo{
    display: block;
    margin: auto auto auto auto;
    width: 80%;
    
    
}
.partner-link{
    padding-top: .5vw;
    text-align: center;
    font-size:calc(.5vw + 8px);
}
.click{
    font-size:calc(.5vw + 5px);

}
.partner-text{
    font-size:calc(.5vw + 12px);
    
}
@media (min-width: 1200px){
    .partner-text{
    font-size: 18px;
    
}
}
@media (max-width: 768px){
    .page-header{
    color: var(--darkColor);
    font-weight: 800;

}

}
@media (max-width: 550px){
    .partner{
        height: auto;

    }
    .partner-container{
        width: 100%;
        grid-template-columns: unset;
        grid-template-rows: auto;
    }
}

`

export default class Partners extends Component {
    render() {
        return (
            <PartnerContainer>
                            <div className="page-header article-title text-center">Our Partners</div>
                                <div className="partner-container">
                                {partners.map((partner, index)=>{
                                return (
                                    <div className="article-background partner">
                                    <div key={index}>
                                        <div className="img-container"><img className="partner-logo" src={partner.logo} alt="partner logo"/></div>
                                        <div className="partner-text">{partner.text}</div>
                                        <div className="partner-link"><a href={partner.link} className="" target="_blank" rel="noopener noreferrer"><div className="click">Click For More Info:</div>{partner.name}</a></div>
                                        
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
