import React, {Component} from 'react';
import '../../App.css';
import './Home.css';
import {Divider, Sidebar} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import {Link} from "react-router-dom";
// import {Menu} from 'semantic-ui-react/dist/commonjs/collections/Menu/Menu';
import Menu from '../../components/Menu/Menu';
import Bio from '../../components/Bio/Bio';
import Profiles from "../../components/Profiles/Profiles";

class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <Menu/>
                {/*<h1 className="pagetitle">Alex Dinh</h1>*/}
                <Profiles/>
                <Bio/>
                <div className="section">Experience</div>
                <p className="entry">Software Engineer Intern at Thales</p>
                <p className="entry">Mobile Software Engineer at Wing AI Technologies</p>
                <p className="entry">Frontend Software Engineer Intern at UCI Paul Merage School of Business</p>
                <p className="entry">Code Instructor at Vision Tech Camps</p>
                <p className="entry">Calculus Tutor at Tony"s Tutorial Services</p>
                <Link to="/projects/">
                    <div className="section">Projects</div>
                </Link>
                <p className="entry">Viz: Responsive Music Visualization</p>
                <p className="entry">Medlify: Spotify + SoundCloud</p>
                <p className="entry">Wing App: Cross-platform mobile app</p>
                <p className="entry">Merage Web Tools: Quick and easy formatting for a webmaster</p>
                <p className="entry">Quadcopter: Remote control + mapping</p>
            </div>
        );
    }
}

export default Home;
