import React from 'react';

class Button extends React.Component {
    constructor() {
        super();
        // this.state = {color: 'red'};
    }
    render() {
        return <button>{this.props.text || 'Click Me'}</button>;
    }
}

export default Button;