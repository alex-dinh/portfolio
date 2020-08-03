/* Projects for small screen */
import React, {Component} from 'react';
import {Grid, Image} from "semantic-ui-react";
import medlify from "../../images/medlify-now-playing.png";
import webtools from "../../images/webtools.PNG";
import WingSlider from "../../components/Sliders/WingSlider";
import QuadSlider from "../../components/Sliders/QuadSlider";
import lightsaber from "../../images/lightsaber.jpg";

class ProjectsSmall extends Component {
    render() {
        return (
            <Grid columns={2}>
                <Grid.Row only='mobile'>
                    <p className="project-mobile">Viz: Music Vizualization</p>
                    <p id='project-desc'>React + Node.js</p>
                    <a href='https://alex-dinh.github.io/medlify'>
                        <Image id='project-img' src={medlify}/>
                    </a>
                </Grid.Row>
                <Grid.Row only='mobile'>
                    <p className="project-mobile">
                        Medlify: Spotify + Soundcloud
                    </p>
                    <p id='project-desc'>React + Node.js</p>
                    <a href='https://alex-dinh.github.io/medlify'>
                        <Image id='project-img' src={medlify}/>
                    </a>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProjectsSmall;

/* removed projects */

// Merage Web Tools
// <Grid.Row only='mobile'>
//     <p className="project-mobile">Merage Web Tools</p>
//     <p id='project-desc'>HTML/CSS/JS</p>
//     <a href='https://ucimerage.github.io/web-tools/'>
//         <Image id='project-img' src={webtools}/>
//     </a>
// </Grid.Row>

// Wing Mobile App
// <Grid.Row only='mobile'>
//     <p className="project-mobile">Wing Mobile App</p>
//     <p id='project-desc'>React Native + Redux</p>
//     <div className='container'><WingSlider/></div>
// </Grid.Row>

// Quadcopter
// <Grid.Row only='mobile'>
//     <p className="project-mobile">Quadcopter</p>
//     <p id='project-desc'>NAZA + Arduino + XBee Radio</p>
//     <div className='container'><QuadSlider/></div>
// </Grid.Row>

// Lightsaber
// <Grid.Row only='mobile'>
//     <p className="project-mobile">Lightsaber</p>
//     <Image src={lightsaber}/>
// </Grid.Row>
