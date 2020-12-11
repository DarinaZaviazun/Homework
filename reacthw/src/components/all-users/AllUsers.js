import React, {Component} from 'react';
import UserService from "../../userServices/UserService";
import User from "../users/User";
import './AllUsers.css'
import {Switch, Route, withRouter} from 'react-router-dom';
import FullUser from "../fullUser/FullUser";

class AllUsers extends Component {
    userService = new UserService()
    state = {users: []}
    async componentDidMount() {
        let users = await this.userService.users()
        this.setState({users})
    }

    render() {
        let {users} = this.state
        let {match:{url}} = this.props;

        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                <div className={'all-users-router'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} render={(props) =>{
                            let {match: {params: {id}}} = props;
                            return <FullUser id={id}  key={id}/>}}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);