import React, { Component } from 'react'
import Iframe from 'react-iframe'
import {StyledTextContainer} from './StyledTextContainer'



 class News extends Component {
    render() {
        return (
            <React.Fragment>
             
            <StyledTextContainer className="w-50 mt-5">

            <h3 className="mb-5">Keep up with us on facebook</h3>
            <Iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500"className="m-auto" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></Iframe>      
            </StyledTextContainer> 

            <StyledTextContainer className="w-50 mt-5">
                <h3>Rust Belt Revival Trail Coalition</h3>
                <h5 className="mb-5">Our Local Mountain Bike trails</h5>
                <Iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frustbeltrevivaltrailcoalition&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" className="m-auto" frameborder="0" allowTransparency="true" allow="encrypted-media"></Iframe>

            </StyledTextContainer>

                    

               

        </React.Fragment>
 

             
           
        )
    }
}
export default News
