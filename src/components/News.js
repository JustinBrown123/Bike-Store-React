import React, { Component } from 'react'
import Iframe from 'react-iframe'
import {StyledTextContainer} from './StyledTextContainer'



 class News extends Component {
    render() {
        console.log("hello from news")
        return (
           
            <React.Fragment>
              
            <StyledTextContainer className="w-50 mt-5">

            <h3 className="mb-5">Keep up with us on facebook</h3>
            <Iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrailside.bicycle.71&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="400" scrolling="no" frameborder="0" className="m-auto"  allowTransparency="true" allow="encrypted-media"></Iframe>      
            </StyledTextContainer> 

            <StyledTextContainer className="w-50 mt-5">
                <h3>Rust Belt Revival Trail Coalition</h3>
                <h5 className="mb-5">Our Local Mountain Bike trails</h5>
                <Iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frustbeltrevivaltrailcoalition&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="400" scrolling="no" className="m-auto" frameborder="0" allowTransparency="true" allow="encrypted-media"></Iframe>

            </StyledTextContainer>

                    

               

        </React.Fragment>
 

             
           
        )
    }
}
export default News
