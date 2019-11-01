import React from 'react';

class Footer extends React.Component {
    constructor() {
        super();
        var today = new Date();
         // this.state = {color: 'red'};
        this.state = {
            year:today.getFullYear(),
        }
    }
    render() {
        return <footer id="colphon">
            {this.state.year}
        </footer>
    }
}

export default Footer;