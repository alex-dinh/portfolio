import React, {Component} from 'react';
import '../../App.css';
import './Menu.css';
import {Icon, Responsive} from 'semantic-ui-react';
import {Link} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className={"menu " + this.props.css}>
                <Link to="/">
                    <h4 className="alex">Alex Dinh</h4>
                </Link>
                <Responsive minWidth={768}>
                <Link to="/home/">
                    <h4 className="menuitem"><Icon name="home"/>Home</h4>
                </Link>
                <Link to="/projects/">
                    <h4 className="menuitem"><Icon name="edit outline"/>Projects</h4>
                </Link>
                <Link to="/background/">
                    <h4 className="menuitem"><Icon name="camera"/>Flow</h4>
                </Link>
                </Responsive>
            </div>
        );
    }
}

export default Menu;
