import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

class FullUser extends Component {
    render() {
        let {id} = this.props
        return (
            <div>
                item id # {id}
            </div>
        );
    }
}

export default withRouter(FullUser);