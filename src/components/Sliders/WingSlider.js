import React, {Component} from 'react';
import home from '../../images/wingapp/1-Home.png';
import sidebar from '../../images/wingapp/2-Sidebar.png';
import taskhistory from '../../images/wingapp/3-Task History.png';
import threads from '../../images/wingapp/4-Threads.png';
import payment from '../../images/wingapp/5-Payment.png';
import help from '../../images/wingapp/6-Help.png';
import Slider from 'react-slick';
import './Slider.css';


export default class WingSlider extends Component {
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
                {/*<div>*/}
                    {/*<img src={home} className='wingslide'></img>*/}
                {/*</div>*/}
                <div>
                    <img src={sidebar} className='wingslide'></img>
                </div>
                <div>
                    <img src={taskhistory} className='wingslide'></img>
                </div>
                <div>
                    <img src={threads} className='wingslide'></img>
                </div>
                <div>
                    <img src={payment} className='wingslide'></img>
                </div>
                <div>
                    <img src={help} className='wingslide'></img>
                </div>
            </Slider>
        );
    }
}
