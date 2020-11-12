import React, { Component } from 'react'
import styled from 'styled-components';


const DefaultCss = styled.div`
height: 90vh;
color: white;
letter-spacing: 1px;

.img-class{  
    max-width: 576px;
    width: 80%;
    min-width: 200px;
    height: auto;
}
`


export default class Default extends Component {
    render() {
        return (
            <DefaultCss>

            <div className="container">
                <div className="row">
                <div className="mx-auto text-center text-uppercase pt-1">
                    
                    <h2 className="text-title">OOF Page not found</h2>
                    <div><strong>404 Error</strong></div>

                    <div className="pt-1">The Requested url <span className="text-danger">{this.props.location.pathname}</span>{" "}<br/>Was Not Found</div>
                    <div className="pt-2">
                        <img className="img-class" src="./images/GuyCrashing.jpg" alt="guy crashing"/>
                    </div>
                    </div>
                </div>
            </div>
            </DefaultCss>
        )
    }
}
