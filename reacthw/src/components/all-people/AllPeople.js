import React, {Component} from 'react';
import PeopleFromAPI from "../../services/PeopleFromAPI";
import Person from "../person/Person";
import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from 'react-router-dom';
import FullPerson from "../fullUser/Full-person";

class AllPeople extends Component {

    peopleFromApi = new PeopleFromAPI()
    state = {people: []};

    async componentDidMount() {
        let people = await this.peopleFromApi.peoples();
        people.map((value, index) => value.id = index+1)
        this.setState({people});
    }

    onDeletePerson = (id) => {
        let {people} = this.state;
        let splice = people.splice(id - 1, 1);
        this.setState({users: splice})
    }

    render() {
        let {people} = this.state;


        return (
            <div>
                {
                    people.map(value => <Person item={value} key={value.id} onDeletePerson={this.onDeletePerson}/>)
                }


            </div>
        );
    }
}

export default withRouter(AllPeople);