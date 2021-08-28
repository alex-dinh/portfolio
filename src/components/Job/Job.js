import React, {Component} from 'react';
import './Job.css';

class Job extends Component {
    render() {
        return (
            <div className="job">
                <div className="title">{this.props.title}</div>
                {' - '}
                <div className="company">{this.props.company}</div>
                <div className="dates">{this.props.dates}</div>
            </div>
        );
    }
}

export default Job;
