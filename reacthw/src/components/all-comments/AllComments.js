import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import FullComments from "../fullComment/FullComments";
import CommentService from "../commentsService/CommentService";
import Comment from "../comments/Comment";
import './AllComments.css'

class AllComments extends Component {
    commentService = new CommentService();
    state = {comments: []};
    async componentDidMount() {
        let comments = await this.commentService.comments()
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        let {match:{url}} = this.props;

        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
                <div className={'all-comments-router'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} render={(props) =>{
                            let {match: {params: {id}}} = props;
                            return <FullComments id={id} key={id}/>}}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllComments);