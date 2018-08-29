import React, {Component} from 'react';
import '../App.css';
import logo from '../logo.svg';
import {Divider} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import Particles from 'react-particles-js';


class Home extends Component {
    render() {
        return (
            <div className="App">
                <div style={{position: 'relative', zIndex:'4'}}>
                    <h1 id='name' className="App-title">Alex Dinh</h1>
                    <h4>Developer.</h4>
                    <h4>Aspiring musician.</h4>
                    <h4>I like to make things.</h4>
                    <Divider/>
                    <a href='https://soundcloud.com/80lux'><Icon id="profile" size='big' name='soundcloud'/></a>
                    <a href='https://open.spotify.com/user/alexladinh'><Icon id="profile" size='big'
                                                                             name='spotify'/></a>
                    <a href='https://twitter.com/alexladinh'><Icon id="profile" size='big' name='twitter'/></a>
                    <a href='https://www.instagram.com/alexladinh/'><Icon id="profile" size='big' name='instagram'/></a>
                    <a href='https://github.com/alex-dinh/'><Icon id="profile" size='big' name='github'/></a>
                    <a href='https://www.linkedin.com/in/alexladinh/'><Icon id="profile" size='big'
                                                                            name='linkedin'/></a>
                </div>
                <Particles
                    style={{position: 'absolute', left: '0', top: '0'}}
                    params={{
                        "particles": {
                            "number": {
                                "value": 60,
                                "density": {
                                    "enable": true,
                                    "value_area": 1600
                                }
                            },
                            "color": {
                                "value": "#000000"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 15,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#8e1414",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }}/>
            </div>
        );
    }
}

export default Home;