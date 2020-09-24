import React, { Component } from 'react';
import {StyledTextContainer} from './StyledTextContainer';

export default class Home extends Component {
    render() {
        return (
            <StyledTextContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1>Title of the bike shop</h1>
                            <h4>Maybe somethin here</h4>
                            <p>Something is wrong here</p>
                            <br/>
                            <p>something is right here</p>

                        </div>
                    </div>
                </div>
            </StyledTextContainer>
        )
    }
}
