import React, { Component } from 'react';
import './background.css';
import '../../App.css';
import '../Menu/Menu.css';
import Menu from "../Menu/Menu";


export default class Background extends Component {
    render() {
        return (
            <div className="background">
                <Menu css="special-menu"/>
            </div>
        );
    }
}
