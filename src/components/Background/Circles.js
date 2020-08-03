import React, {Component} from 'react';
import './balls.css';

export default class Circles extends Component {
    constructor(props) {
        super(props);

        this.state = {x: 0, y: 0};
    }

    componentDidMount() {
        this.interval = setInterval(() => this.draw(), 10)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    static getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }

    static getRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    _onMouseMove(e) {
        this.setState({x: e.screenX, y: e.screenY});
    }

    draw() {
        if (this.state.x > 0 && this.state.y > 0) {
            let range = 15;
            let color = "background: rgb(" + Circles.getRandomInt(0, 255) + "," + Circles.getRandomInt(0, 255) + "," + Circles.getRandomInt(0, 255) + ");";
            let sizeInt = Circles.getRandomInt(10, 30);
            let size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
            let left = "left: " + Circles.getRandomInt(this.state.x - range - sizeInt, this.state.y + range) + "px;";
            let top = "top: " + Circles.getRandomInt(this.state.y - range - sizeInt, this.state.y + range) + "px;";
            let style = left + top + color + size;

            return(
                <div className='ball' style={style}></div>
            );
        }
    }


    render() {
        const {x, y} = this.state;
        return(
            <div id='wrap' onMouseMove={this._onMouseMove.bind(this)}>
                <h1>Mouse coordinates: { x } { y }</h1>
            </div>
        );
    }


}
