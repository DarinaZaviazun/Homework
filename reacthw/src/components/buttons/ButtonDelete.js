import React, {Component} from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from 'react-router-dom';

class ButtonDelete extends Component {
    render() {
        return (
            <li>
                {
                   // <Link className={'delete'}>Delete</Link>
                }
            </li>
        );
    }
}

export default withRouter(ButtonDelete);