import React, {Component} from 'react';

class BtnChose extends Component {
    render() {
        let {item, selectPost} = this.props;

        return (

                <p><button onClick= {() => selectPost(item.id)}>Choose!</button></p>

        );
    }
}

export default BtnChose;