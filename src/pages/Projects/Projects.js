import React, {Component} from 'react';
import '../../App.css';
import './Projects.css';
import ProjectsLarge from './ProjectsLarge';
import ProjectsSmall from "./ProjectsSmall";

export default class Projects extends Component {
    render() {
        return (
            <div>
                <ProjectsLarge/>
                <ProjectsSmall/>
            </div>
        );
    }
}
