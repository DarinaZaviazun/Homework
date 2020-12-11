import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PostService from "../../postServices/PostService"

class FullPost extends Component {

    state = {post: null};
    postService = new PostService();

    async componentDidMount(){
        let {id} = this.props;
        const post = await this.postService.post(id);
        this.setState({post});
    }

    render() {
        const {post} = this.state;

        return (
            <div>
                {post && <div>#{post.id}  Title: {post.title} Body: {post.body}</div>}
            </div>
        );
    }
}

export default withRouter(FullPost);