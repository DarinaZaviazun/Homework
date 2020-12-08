import React, {Component} from 'react';
import User from "../components/User";

class UsersFromApi extends Component {

    state = {user: [], selectedPost: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {this.setState({user: value})})
    }

    selectPost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(value => value.json())
            .then(value => value)
            .then(value => this.setState({selectedPost: value}))
    }

    getRand() {

        return Math.floor(Math.random() * 10);

    }

    render() {
        let {user, selectedPost} = this.state;

        return (
            <div>
                {
                    selectedPost && <h1>Title: {selectedPost[this.getRand()].title}</h1>
                }
                {
                    user.map(user => <User user={user} key={user.id} selectPost={this.selectPost}/>)
                }
            </div>
        );
    }
}

export default UsersFromApi;