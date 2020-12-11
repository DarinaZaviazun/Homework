import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

class Post extends Component {
    render() {
        let {item, match:{url}} = this.props
        return (
            <div>
                {item.title} -- <Link to={`${url}/${item.id}`}>Details</Link>
            </div>
        );
    }
}

export default withRouter(Post);