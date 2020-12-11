import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

class FullPost extends Component {
    render() {
        let {id} = this.props
        return (
            <div>
                here we are post # {id}
            </div>
        );
    }
}

export default withRouter(FullPost);