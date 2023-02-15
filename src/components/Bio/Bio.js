import React, { Component } from 'react';
import './Bio.css';

class Bio extends Component {
    render() {
        return (
            <div className="bio">
                Hi, my name is Alex.
                <br/>
                <br/>
                I previously worked as a software engineer for Amazon, where I developed the customer claim automation systems
                mainly using Java and Python. I worked with Amazon datastores (RDS and DynamoDB) and helped in the deployment of 
                machine learning models for our automation software. Currently seeking new software engineering opportunities!
                <br/>
                <br/>

            </div>
        )
    }
}

export default Bio;
