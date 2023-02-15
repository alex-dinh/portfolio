import React, { Component } from 'react';
import './App.css';
import {MemoryRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Background from './components/Background/Background';
import Music from "./pages/Music/Music";
// import {createHashHistory} from "history";
// const history = createHashHistory();

class App extends Component {
    render() {
        return (
            <div>
                {/*<Router initialEntries={['/']} initialIndex={0} history={history}>*/}
                <MemoryRouter initialEntries={['/']} initialIndex={0}>
                    <Switch>
                        <Route exact strict path ="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/background" component={Background}/>
                    </Switch>
                </MemoryRouter>
            </div>
        );
    }
}

export default App;
