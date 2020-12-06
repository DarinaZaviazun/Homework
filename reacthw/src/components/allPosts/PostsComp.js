import React, {Component} from 'react';
import PostOne from '../postOne/PostOne'
import './style.css'
import {GettingPosts} from '../../components/services/GettingPosts'

class PostsComp extends Component {

    getPosts = new GettingPosts();
    state = {post: [], selectedPost: null}

    componentDidMount() {
        this.getPosts.getAllPosts().then(value => this.setState({post: value}))
        }

    selectPost = (id) => {
        let {post} = this.state;
        let found = post.find(item => item.id === id)
        this.setState({selectedPost: found})
    }


    render() {
        let {post, selectedPost} = this.state
        return (
            <div>
                {selectedPost && <h1>Selected post #{selectedPost.id} -- {selectedPost.title}</h1>}
                {
                    post.map(post => <PostOne post={post} key={post.id} selectPost={this.selectPost}/>)
                }
            </div>
        );
    }
}

export default PostsComp;