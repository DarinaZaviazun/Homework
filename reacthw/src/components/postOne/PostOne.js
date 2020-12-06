import React, {Component} from 'react';
import BtnChose from '../button/BtnChose'

class PostOne extends Component {

    render() {
    let {post, selectPost} = this.props

        return (
            <div>
                <h2>{post.id} -- {post.title}</h2>
                <p>{post.body}</p>
                <BtnChose selectPost={selectPost} item={post}/>
            </div>
        );
    }
}

export default PostOne;