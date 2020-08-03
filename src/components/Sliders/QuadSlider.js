import React, {Component} from 'react';
import './Slider.css';
import quadcopter from '../../images/quadcopter.jpg';
import circuit from '../../images/circuit.jpg';
import flight1 from '../../images/flight1.mp4';
import flight2 from '../../images/flight2.mp4';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

export default class QuadSlider extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={quadcopter} className='slide'></img>
                </div>
                <div>
                    <img src={circuit} className='slide'></img>
                </div>
                <div>
                    <ReactPlayer url={flight1} playing controls='true' className='slide' width='100%'/>
                </div>
                <div>
                    <ReactPlayer url={flight2} playing controls='true' className='slide' width='100%'/>
                </div>
            </Slider>
        );
    }
}
