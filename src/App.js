import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Background from './components/Background/Background';
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div>
                <Router initialEntries={['/']} initialIndex={0} history={history}>
                    <Switch>
                        <Route exact path ="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/background" component={Background}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
