import React from 'react';

class Navigation extends React.Component {
    constructor() {
        super();
        // this.state = {color: 'red'};
    }
    render() {
        return <header>
            <nav>
                <ul><li>About</li><li>Lessons</li><li>Schedule</li><li>Contact Us</li></ul>
            </nav>
        </header>
    }
}

export default Navigation;