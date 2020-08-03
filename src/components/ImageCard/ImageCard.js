import React, {Component} from 'react';
import './ImageCard.css';
import {Image} from "semantic-ui-react";


class ImageCard extends Component {
    render() {
        return (
            <div className="card">
                <Image
                    src={this.props.src}
                    className="card-img"
                />
            </div>
        );
    }
}

export default ImageCard;

