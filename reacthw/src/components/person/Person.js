import React, {Component} from 'react';
import ButtonDetails from "../buttons/ButtonDetails";
import "./Person.css"
import ButtonFilms from "../buttons/ButtonFilms";
import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from 'react-router-dom';

class Person extends Component {

    render() {
        let {item, onDeletePerson} = this.props;

        return (
            <div className={"person"}>
                {item.id} - {item.name}
                <ul>
                    <ButtonDetails item={item}/>
                    <ButtonFilms item={item}/>
                    <button className={'delete'} onClick={() => onDeletePerson(item.id)}>Delete</button>
                </ul>
            </div>
        );
    }
}

export default withRouter(Person);