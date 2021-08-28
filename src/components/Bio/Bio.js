import React, { Component } from 'react';
import './Bio.css';

class Bio extends Component {
    render() {
        return (
            <div className="bio">
                Hi, my name is Alex.
                <br/>
                <br/>
                I am currently working as a Software Engineer at Amazon. I am a part of Team RoBO
                (Remediation of Bad Orders), where I do development on the systems that automate the decision-making
                to handle customer claims.
                <br/>
                <br/>

            </div>
        )
    }
}

export default Bio;
