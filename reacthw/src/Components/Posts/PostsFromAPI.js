import React, {Component} from 'react';
import "./style.css"
import Postone from '../post/Postone'

class PostsFromApi extends Component {

state = {posts: [], ChoosenOne: null}

componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(value => value.json())
        .then(posts => {
            this.setState({posts})
            }
        );
}

SelectPost = (id) => {
    let {posts} = this.state;
    let found = posts.find(value => value.id === id);
    this.setState({ChoosenOne: found})
    console.log(found.id)
}

    render() {
        let {posts, ChoosenOne} = this.state;

        return (

        <div>
            {ChoosenOne && <h1>{ChoosenOne.id}</h1>}
                {
                    posts.map(post => <Postone post={post} key ={post.id} find={this.SelectPost}/>)
                }

        </div>
        );
    }
}

export default PostsFromApi;