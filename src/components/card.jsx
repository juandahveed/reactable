import React from 'react';

class Card extends React.Component {
    constructor() {
        super();
        // this.state = {color: 'red'};
    }
    render() {
        return <h1>Hello, {this.props.name || 'Testerson'}</h1>;
    }
}

export default Card;