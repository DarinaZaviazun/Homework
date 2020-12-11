import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserService from "../../userServices/UserService";

class FullUser extends Component {

state = {user: null};
userService = new UserService();

async componentDidMount() {

    let {id} = this.props;
    const user = await this.userService.user(id);
    this.setState({user});
}

    render() {
        const {user} = this.state;

        return (
            <div>
                {user && <div>Id: {user.id}  Name: {user.name}  E-mail: {user.email}  Firm: {user.company.name}</div>}
            </div>
        );
    }
}

export default withRouter(FullUser);