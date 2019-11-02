import React from 'react';
import { withAuth } from '@okta/okta-react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    async login() {
        // Redirect to '/' after login
        this.props.auth.login('/about');
    }

    async logout() {
        // Redirect to '/' after logout
        this.props.auth.logout('/');
    }

    render() {
        // return <div>
        //     <h2>Please Login To Use The App</h2>
        if (this.state.authenticated === null) return null;
        return this.state.authenticated ?
            <button onClick={this.logout}>Logout</button> :
            <div><h2>Please Login To Use The App</h2>
                <button onClick={this.login}>Login</button></div>;
        // </div>
    }
}

export default withAuth(Home);