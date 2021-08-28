import React, {Component} from 'react';
import '../../App.css';
import './Projects.css';
import Menu from '../../components/Menu/Menu';
import ProjectsLarge from './ProjectsLarge';
import ProjectsSmall from "./ProjectsSmall";

export default class Projects extends Component {
    render() {
        return (
            <div>
                {/*<Menu/>*/}
                {/*<h1 id="pagetitle">Projects</h1>*/}
                {/*<div className="divider"/>*/}
                <ProjectsLarge/>
                <ProjectsSmall/>
            </div>
        );
    }
}
