import React, {Component} from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from 'react-router-dom';

class ButtonFilms extends Component {
    render() {
        return (
            <li>
                {
                    //<Link className={'films'}>Films</Link>
                }
            </li>
        );
    }
}

export default withRouter(ButtonFilms);