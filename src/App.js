import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav';
import {MemoryRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Background from './components/Background';


class App extends Component {
    render() {
        return (
            <div>
                <MemoryRouter initialEntries={['/']} initialIndex={0}>
                    <div className="App">
                        <SideNav/>
                        <Route exact path ="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/background" component={Background}/>
                    </div>
                </MemoryRouter>
            </div>
        );
    }
}

export default App;
