import React, {Component} from 'react';
import '../App.css';
import logo from '../logo.svg';
import {Divider} from 'semantic-ui-react'
import ImageSlider from "./Slider";
import medlify from '../images/medlify-now-playing.PNG';
import lightsaber from '../images/lightsaber.jpg';


export default class Projects extends Component {
    render() {
        return (
            <div style={{padding: '30px'}}>
                <h1 className="projects-title">Projects</h1>
                <img src={logo} className="App-logo" alt="logo"/>
                <Divider/>
                <h1 className="projects">Medlify</h1>

                <a id='medlify-img' href='https://alex-dinh.github.io/medlify'>
                    <img src={medlify} style={{width: '50vw'}}></img>
                </a>
                <Divider/>
                <h1 className="projects">Quadcopter</h1>
                <div className='container'><ImageSlider/></div>
                <Divider style={{marginTop: '40px'}}/>
                <h1 className="projects">Lightsaber</h1>
                <img src={lightsaber} style={{width: '30vw'}}></img>
                <Divider/>

            </div>
        );
    }
}
