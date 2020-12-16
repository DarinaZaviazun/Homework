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
        let {item} = this.props
        return (
            <li>
                {
                    <Link className={'films'} to={`/person/${item.id}/films`}>Show Films</Link>
                }
            </li>
        );
    }
}

export default withRouter(ButtonFilms);