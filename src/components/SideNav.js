import React, {Component} from 'react';
import {Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class SideNav extends Component {
    state = {visible: true};

    handleButtonClick = () => this.setState({visible: !this.state.visible});

    handleSidebarHide = () => this.setState({visible: false});

    render() {
        const {visible} = this.state;

        return (
            <div>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical 
                    // visible={visible}
                    width='thin'
                >
                    {/*<Menu.Item onClick={this.handleButtonClick} as='a'>Hide</Menu.Item>*/}
                    <Link to='/home/'>
                        <Menu.Item as='a'><Icon name='home'/>Home</Menu.Item>
                    </Link>
                    <Link to='/projects/'>
                        <Menu.Item as='a'><Icon name='edit outline'/>Projects</Menu.Item>
                    </Link>
                    <Link to='/background/'>
                        <Menu.Item as='a'><Icon name='camera'/>Cool CSS</Menu.Item>
                    </Link>
                </Sidebar>
                {/*<Icon id="sidebutton"*/}
                      {/*onClick={this.handleButtonClick}*/}
                      {/*name='server'*/}
                      {/*size='large'/>*/}
            </div>

        )
    }
}

export default SideNav;