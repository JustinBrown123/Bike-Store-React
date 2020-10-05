import React, { Component } from 'react'
import Iframe from 'react-iframe'

import styled from 'styled-components'

const FaceBookDiv = styled.div `
   margin:auto;
   text-align: center;
   .facebook-content{
       
        max-width: 340px;
        max-height: 500px;
        
        width: 90vw;
        height: 50vh;
   }


`

 class News extends Component {
    render() {
        console.log("hello from news")
        return (
           
            <React.Fragment>
              
    
            <FaceBookDiv>
            <h3 className="mb-5">Keep up with us on facebook</h3>
            <Iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrailsidebicycle2020&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" className="m-auto facebook-content"  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></Iframe> 
            </FaceBookDiv>     


            <FaceBookDiv>
                <h3>Rust Belt Revival Trail Coalition</h3>
                <h5 className="mb-5">Our Local Mountain Bike trails</h5>
                <Iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frustbeltrevivaltrailcoalition&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" scrolling="no" className="m-auto" frameborder="0" allowTransparency="true" allow="encrypted-media"></Iframe>
                </FaceBookDiv>    

                    

               

        </React.Fragment>
 

             
           
        )
    }
}
export default News
