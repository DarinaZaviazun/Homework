import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ButtonHomeWorld extends Component {


// todo планету дома
    render(){
        let {home} = this.props
        let link = home.substring(29, 31)
    return (
        <li>
            {
                <Link className={'homeworld'} to={`/planets/${link}`}>Show Homeworld</Link>
            }
        </li>
    );
}
}

export default ButtonHomeWorld;