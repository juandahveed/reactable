import React from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Security, ImplicitCallback } from '@okta/okta-react';

import Home from '../pages/home';
import About from '../pages/about';
import Lessons from '../pages/lessons';
import Schedule from '../pages/schedule';
import Contact from '../pages/contact';
import Notfound from '../pages/notfound';

const config = {
    issuer: 'https://dev-373610.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: '0oa1q3t4pyfd7fUHW357',
    pkce: true
}

class Navigation extends React.Component {
    constructor() {
        super();
        // this.state = {color: 'red'};
    }
    render() {
        return <Router>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                            <li><NavLink activeClassName="active" to="/lessons">Lessons</NavLink></li>
                            <li><NavLink activeClassName="active" to="/schedule">Schedule</NavLink></li>
                            <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Security {...config}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/lessons" component={Lessons} />
                        <Route exact path="/schedule" component={Schedule} />
                        <Route exact path="/contact" component={Contact} />
                        <Route path='/implicit/callback' component={ImplicitCallback} />
                        <Route component={Notfound} />
                    </Switch>
                </Security>

            </div>
        </Router>
    }
}

export default Navigation;