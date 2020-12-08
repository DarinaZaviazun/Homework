import React, {Component} from 'react';
import Button from "./Button";

class User extends Component {

    render() {
        let {user, id, selectPost} = this.props;

        return (
            <div>
                <h2>{user.id} -- {user.name}</h2>
                <Button user={user} id={id} selectPost={selectPost}/>
            </div>
        );
    }
}

export default User;