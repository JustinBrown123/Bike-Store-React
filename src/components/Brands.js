import React, { Component } from 'react'
import {brands} from "../brandData"
import styled from "styled-components"


const BrandContainer = styled.div`

.brand-container-div{
    /* border-radius: 20px;
    background: rgba( 250, 250, 250, 0.8); */
    width: 90%;
    margin: auto;
    height: auto;
    font-weight: 800;
}

.item{
    display:flex;
    justify-content:center;
    align-items:center;
   


}
.brand-grid{
    padding: 5px;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1px;
    justify-items: center;
    align-items: center;
}
.brand-page-title{
    width: 100%;
    padding: 2.5vw 0 5vw 0;
  
    font-size: calc(1vw + 18px);

}
.brand-size{
    margin:auto;
    padding: 5px;
    max-width:200px;
    max-height: 150px;
    cursor: pointer;
    
}
@media( min-width: 1200px){
    .brand-grid{
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
    .brand-size{ 
    max-width:350px;
    max-height: 200px;
    
}
}
@media( max-width: 501px){
    .brand-grid{


        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 5px;
    }
    .item{
        height: 100px;
        width: 150px;
    }
    .brand-size{ 
    max-width:140px;
   
    max-height: 100px;
    
}
}
`

export default class Brands extends Component {
    render() {
        return (
            <BrandContainer>
           
            <div className="brand-container-div article-background">
            <div className="brand-page-title article-title text-center">Brands We Carry</div>
                <div className="brand-grid">
                {brands.map((brand, index)=>{
                    return(
                    <div className="item" key={index}>
                        <a href={brand.link}rel="noopener noreferrer"  target="_blank"><img className="brand-size" src={brand.img} alt="brand"/></a>
                    </div>
                    )
                })}
                </div>
                
                
            </div>
            </BrandContainer>
        )
    }
}
