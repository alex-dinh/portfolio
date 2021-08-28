import React, { Component } from 'react';
import '../../App.css';
import './Menu.css';
import { Icon, Responsive, Dropdown } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className={"menu " + this.props.css}>
                <Link to="/">
                    <div className="name">
                        <h4 className="alex">Alex Dinh</h4>
                    </div>
                </Link>
                <div className="middle" />

                <Responsive minWidth={768}>
                    <div className="nav-wrapper">
                        <Link to="/home/">
                            <h4 className="menuitem"><Icon name="home" />Home</h4>
                        </Link>
                        <Link to="/music/">
                            <h4 className="menuitem"><Icon name="headphones" />Music</h4>
                        </Link>
                        <Link to="/background/">
                            <h4 className="menuitem"><Icon name="camera" />Flow</h4>
                        </Link>
                    </div>
                </Responsive>

                <Responsive maxWidth={768}>
                    <Dropdown className="dropdown" icon="bars" direction="left">
                        <Dropdown.Menu>
                        <Link to="/home/">
                            <Dropdown.Item>
                            <h4 className="menuitem"><Icon name="home" />Home</h4>
                            </Dropdown.Item>
                        </Link>
                        <Link to="/music/">
                            <Dropdown.Item>
                                <h4 className="menuitem"><Icon name="headphones" />Music</h4>
                            </Dropdown.Item>
                        </Link>
                        <Link to="/background/">
                            <Dropdown.Item>
                                <h4 className="menuitem"><Icon name="camera" />Flow</h4>
                            </Dropdown.Item>
                        </Link>
                    </Dropdown.Menu>
                    </Dropdown>
                </Responsive>
            </div>
        );
    }
}

export default Menu;

/*
<Link to="/projects/">
    <h4 className="menuitem"><Icon name="edit outline"/>Projects</h4>
</Link>
*/
