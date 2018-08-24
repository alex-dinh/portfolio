import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Divider } from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import Circles from './Circles';



class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1 id='name' className="App-title">Alex Dinh</h1>
                <p>--description--</p>
                <Divider/>
                <a href='https://soundcloud.com/80lux'><Icon id="profile" size='big' name='soundcloud'/></a>
                <a href='https://open.spotify.com/user/alexladinh'><Icon id="profile" size='big' name='spotify'/></a>
                <a href='https://twitter.com/alexladinh'><Icon id="profile" size='big' name='twitter'/></a>
                <a href='https://www.instagram.com/alexladinh/'><Icon id="profile" size='big' name='instagram'/></a>
                <a href='https://github.com/alex-dinh/'><Icon id="profile" size='big' name='github'/></a>
                <a href='https://www.linkedin.com/in/alexladinh/'><Icon id="profile" size='big' name='linkedin'/></a>

            </div>
        );
    }
}

export default Home;