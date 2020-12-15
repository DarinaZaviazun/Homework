import React, {Component} from 'react';
import PeopleFromAPI from "../../services/PeopleFromAPI";

class FullPerson extends Component {

    state = {person: null};
    peopleFromApi = new PeopleFromAPI()

    async componentDidMount(){
        let {id} = this.props;
        const person = await this.peopleFromApi.people(id);
        this.setState({person})
    }

    render() {
        const {person} = this.state
        return (

            <div>
                {person && <div>{person.name} - {person.height}</div>}
            </div>
        );
    }
}

export default FullPerson;