import React, { Component } from 'react'
import {StyledTextContainer} from './StyledTextContainer';


export default class News extends Component {
    render() {
        return (
            <div>


                <StyledTextContainer>
                    <div className="text-center p-4">
                        <h3>Keep up with us on facebook</h3>
                        <div className="fb-page p-3" data-href="https://www.facebook.com/facebook"data-tabs="timeline" data-width="500" data-hide-cover="true" data-show-facepile="true">                    
                        </div>
                    </div>
                    <div className="color-line"></div>
                    <div className="text-center">
                        <h3>Rust Belt Revival Trail coalation</h3>
                        <div className="fb-page p-3" data-href="https://www.facebook.com/rustbeltrevivaltrailcoalition" data-tabs="timeline"data-width="500" data-hide-cover="true" data-show-facepile="true">                    
                        </div>
                    </div>
               </StyledTextContainer>
            </div>
        )
    }
}
