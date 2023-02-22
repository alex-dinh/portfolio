import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";
import './Profiles.css';

class Profiles extends Component {
    render() {
        return (
            <div className="profile-wrapper">
                <a href="https://soundcloud.com/luxare">
                    <Icon size="big" name="soundcloud" id="profile"/>
                </a>
                <a href="https://open.spotify.com/artist/6tU9HTQRScRrfJA000ZJwk?si=S8MVcZU4ToW0c2cd6NaEAA">
                    <Icon size="big" name="spotify" id="profile"/>
                </a>
                <a href="mailto:alexdinh1028@gmail.com">
                    <Icon size="big" name="mail" id="profile"/>
                </a>
                <a href="https://github.com/alex-dinh/">
                    <Icon size="big" name="github" id="profile"/>
                </a>
                <a href="https://www.linkedin.com/in/alexladinh/">
                    <Icon size="big" name="linkedin" id="profile"/>
                </a>
            </div>
        );
    }
}

export default Profiles;
