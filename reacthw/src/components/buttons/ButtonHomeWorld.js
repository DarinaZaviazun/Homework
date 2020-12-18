import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
BrowserRouter as Router,
Switch,
Route,

withRouter
} from 'react-router-dom';

import Planet from "../planets/Planet";
class ButtonHomeWorld extends Component {

    render(){
        let {home} = this.props
        let link = home.substring(29, 31)
    return (
        <li>
            {
                <Link className={'homeworld'} to={`/planets/${link}`}>Show Homeworld</Link>
            }

        </li>

    );
}
}

export default withRouter(ButtonHomeWorld);