import React, {Component} from 'react';
import FullPost from "../fullPost/FullPost";
import PostService from "../../postServices/PostService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import Post from "../posts/Post";
import './allPosts.css'


class AllPosts extends Component {
    postService = new PostService();
    state = {posts: []};
    async componentDidMount() {
        let posts = await this.postService.posts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        let {match:{url}} = this.props;
        console.log(this.props)
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
                <div className={'all-posts-router'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} render={(props) =>{
                            let {match: {params: {id}}} = props;
                            {return <FullPost id={id}/>}}}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPosts);