import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
        // this.state = {color: 'red'};
    }
    render() {
        return <div>
            <h2>Please Login To Use The App</h2>
            <form>
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
            </form>
        </div>
    }
}

export default Home;