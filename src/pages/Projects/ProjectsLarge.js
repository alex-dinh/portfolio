/* Projects for Large Screen */
import React, {Component} from 'react';
import './Projects.css';
import {Grid, Image} from 'semantic-ui-react';
import paragraph from '../../images/paragraph.png';
import medlify from '../../images/medlify-np.png';
import viz from '../../images/Viz-Circle.png';
import qmk from '../../images/qmk.png';
import ImageCard from '../../components/ImageCard/ImageCard';

class ProjectsLarge extends Component {
    render() {
        return (
            <Grid columns={2}>
                <Grid.Row only='tablet computer'>
                    <Grid.Column>
                        <div className="project-large">Keychron K8 QMK Port</div>
                        <div className="project-desc">Custom Keyboard Firmware</div>
                        <a href="https://github.com/alex-dinh/keychron-k8">
                            <ImageCard src={qmk}/>
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="project-large">Viz: Music Visualization</div>
                        <div className="project-desc">Unity/C#</div>
                        <a href="https://github.com/alex-dinh/Viz">
                            <ImageCard src={viz}/>
                        </a>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only='tablet computer'>
                    <Grid.Column>
                        <div className="project-large">Medlify: Spotify + Soundcloud</div>
                        <div className="project-desc">React + Node.js</div>
                        <a href="https://alex-dinh.github.io/medlify">
                            <ImageCard src={medlify}/>
                        </a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProjectsLarge;

/* removed projects */

// Merage Web Tools
// <Grid.Column>
//     <p className="project-large">Merage Web Tools</p>
//     <p id='project-desc'>HTML/CSS/JS</p>
//     <a href='https://ucimerage.github.io/web-tools/'>
//         <Image id='project-img' src={webtools}/>
//     </a>
// </Grid.Column>

// Wing Mobile App
// <Grid.Column>
//     <p className="project-large">Wing Mobile App</p>
//     <p id='project-desc'>React Native + Redux</p>
//     <div className='container'><WingSlider/></div>
// </Grid.Column>

// Quadcopter
// <Grid.Column>
//     <p className="project-large">Quadcopter</p>
//     <p id='project-desc'>NAZA + Arduino + XBee Radio</p>
//     <div className='container'><QuadSlider/></div>
// </Grid.Column>

// Lightsaber
// <Grid.Column>
//     <p className="project-large">Lightsaber</p>
//     <Image src={lightsaber}/>
// </Grid.Column>
