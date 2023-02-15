import React, {Component} from 'react';
import '../../App.css';
import './Home.css';
import {Divider, Sidebar} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import Bio from '../../components/Bio/Bio';
import Profiles from '../../components/Profiles/Profiles';
import Projects from '../Projects/Projects';
import Job from '../../components/Job/Job';

class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <Menu/>
                <Profiles/>
                <Bio/>
                <div className="section">Experience</div>
                <Job title="Software Development Engineer"
                     company="Amazon"
                     dates="April 2021 - May 2022"/>
                <Job title="Fullstack Software Engineer Intern"
                     company="RISE Summer 2020"
                     dates="July 2020 - September 2020"/>
                <Job title="Software Engineer Intern"
                     company="Thales Avionics"
                     dates="June 2020 - Sept 2020"/>
                <Job title="Software Engineer Intern"
                     company="Wing AI Technologies"
                     dates=" Jan 2020 -  June 2020"/>
                <Job title="Frontend Software Engineer Intern"
                     company="UCI Paul Merage School of Business"
                     dates="Jan 2019 - Jan 2020"/>
                <Job title="Code Instructor"
                     company="Vision Tech Camps"
                     dates="July 2018 - August 2018"/>
                <Link to="/projects/"><div className="section">Projects</div></Link>
                <Projects/>
            </div>
        );
    }
}

export default Home;

/*
<p className="entry">Viz: Responsive Music Visualization</p>
<p className="entry">Medlify: Spotify + SoundCloud</p>
<p className="entry">Wing App: Cross-platform mobile app</p>
<p className="entry">Merage Web Tools: Quick and easy formatting for a webmaster</p>
<p className="entry">Quadcopter: Remote control + mapping</p>
*/
