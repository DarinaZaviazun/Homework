import React, {Component} from 'react';
import ButtonDetails from "../buttons/ButtonDetails";
import "./Person.css"
import ButtonFilms from "../buttons/ButtonFilms";
import ButtonDelete from "../buttons/ButtonDelete";
import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from 'react-router-dom';

class Person extends Component {
    render() {
        let {item} = this.props;

        return (
            <div className={"person"}>
                {item.name} <ul><ButtonDetails item={item}/> <ButtonFilms/> <ButtonDelete/></ul>
            </div>
        );
    }
}

export default withRouter(Person);