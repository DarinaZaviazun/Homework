import React, {Component} from 'react';
import "./App.css"
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <div className={"header"}>
                    <Link id="home">Header</Link>
                    <Link id="user" to={"/users"}>User</Link>
                </div>
                <div className={'appRoute'}>
                    <Switch>
                        <Route path={"/users"}>
                            <AllUsers/>
                        </Route>
                    </Switch>
                </div>
            </div>
            </Router>
        );
    }
}

export default App;