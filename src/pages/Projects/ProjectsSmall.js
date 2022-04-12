/* Projects for small screen */
import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import medlify from '../../images/medlify-np.png';
import viz from '../../images/Viz-Circle.png';
import qmk from '../../images/qmk.png';

class ProjectsSmall extends Component {
    render() {
        return (
            <Grid columns={2}>
                <Grid.Row only="mobile">
                    <p className="project-mobile">Keychron K8 QMK Port</p>
                    <p id="project-desc">Custom Keyboard Firmware</p>
                    <a href="https://github.com/alex-dinh/keychron-k8">
                        <Image id="project-img" src={qmk} />
                    </a>
                </Grid.Row>
                <Grid.Row only="mobile">
                    <p className="project-mobile">Viz: Music Vizualization</p>
                    <p id="project-desc">React + Node.js</p>
                    <a href="https://github.com/alex-dinh/Viz">
                        <Image id="project-img" src={viz} />
                    </a>
                </Grid.Row>
                <Grid.Row only="mobile">
                    <p className="project-mobile">
                        Medlify: Spotify + Soundcloud
                    </p>
                    <p id="project-desc">React + Node.js</p>
                    <a href="https://alex-dinh.github.io/medlify">
                        <Image id="project-img" src={medlify} />
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
