import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

class FullComments extends Component {
    render() {
        let {id} = this.props
        return (
            <div>
                here we have comment # {id}
            </div>
        );
    }
}

export default withRouter(FullComments);