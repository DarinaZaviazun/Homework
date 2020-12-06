import React, {Component} from 'react';

class Postone extends Component {
    render() {
        let {post, find} = this.props;

        return (
            <div>
                <h2>{post.id}. {post.title}</h2>
                <p>{post.body}</p>
                <p><button onClick= {() => find(post.id)}>Chose</button></p>
            </div>
        );
    }
}

export default Postone;