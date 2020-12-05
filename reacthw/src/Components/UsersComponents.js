import React, {Component} from 'react';
import "./users_style.css"

class UsersComponents extends Component {
    render() {
        let {user, cls} = this.props;
        let def = this.props.user;

        return (
            <div className={cls}>
                Name - {def.name} ---
                Age - {def.age} ---
                City - {def.address.city}
            </div>
        );
    }
}

export default UsersComponents