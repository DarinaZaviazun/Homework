import React, {Component} from 'react';
import './Buttons.css'
import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from 'react-router-dom';
import FullPerson from "../fullUser/Full-person";

class ButtonDetails extends Component {
    render() {
        let {item} = this.props

        return (
            <li>
                {
                    <Link className={'details'} to={`/people/${item.id}`}>Details</Link>
                }
            </li>
        );
    }
}

export default withRouter(ButtonDetails);