import React, { Component } from 'react'
import styled from 'styled-components';


const DefaultCss = styled.div`
height: 90vh;
color: white;
letter-spacing: 1px;
`


export default class Default extends Component {
    render() {
        return (
            <DefaultCss>

            <div className="container">
                <div className="row">
                <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                    <h1>404</h1>
                    <h1>Error:</h1>
                    <h2 className="p-1">Page Not Found</h2>
                    <h3 className="p-1">The Requested url <span className="text-danger">{this.props.location.pathname}</span>{" "}</h3>
                    <h3 className="p-1">Was Not Found</h3>
                    </div>
                </div>
            </div>
            </DefaultCss>
        )
    }
}
