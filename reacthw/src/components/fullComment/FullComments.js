import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import CommentService from "../commentsService/CommentService"

class FullComments extends Component {

    state = {comment: null};
    commentService = new CommentService();

    async componentDidMount(){
        let {id} = this.props;
        const comment = await this.commentService.comment(id);
        this.setState({comment})
    }

    render() {
        const {comment} = this.state;

        return (
            <div>
                {comment && <div>Comment #{comment.id} Title: {comment.name} From: {comment.email}</div>}
            </div>
        );
    }
}

export default withRouter(FullComments);