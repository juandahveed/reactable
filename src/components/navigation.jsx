import React from 'react';

class Navigation extends React.Component {
    constructor() {
        super();
        // this.state = {color: 'red'};
    }
    render() {
        return <header>
            <nav>
                <ul><li>About</li><li>Our Team</li><li>Contact Us</li></ul>
            </nav>
        </header>
    }
}

export default Navigation;