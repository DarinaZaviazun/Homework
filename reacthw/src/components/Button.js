import React, {Component} from 'react';

class Button extends Component {

    render() {
        let {user, selectPost} = this.props;



        return (
            <div>
                <button onClick={() => selectPost(user.id)}>Choose!</button>
            </div>
        );
    }
}

export default Button;