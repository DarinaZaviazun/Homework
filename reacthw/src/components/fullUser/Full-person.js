import React, {Component} from 'react';
import PeopleFromAPI from "../../services/PeopleFromAPI";
import ButtonFilms from "../buttons/ButtonFilms";
import ButtonHomeWorld from "../buttons/ButtonHomeWorld";
import "./detailed.css"

class FullPerson extends Component {

    state = {person: null};
    peopleFromApi = new PeopleFromAPI()

    async componentDidMount() {
        let {id} = this.props;
        const person = await this.peopleFromApi.people(id);
        this.setState({person})
    }

    render() {
        const {person} = this.state
        return (

            <div>
                {person && <div className={'detailed'}>
                    Name: {person.name} <br/>
                    Height: {person.height} <br/>
                    Mass : {person.mass} <br/>
                    Hair color: {person.hair_color} <br/>
                    Skin color: {person.skin_color} <br/>
                    Eye color: {person.eye_color} <br/>
                    Birth year: {person.birth_year} <br/>
                    Gender: {person.gender} <br/>
                    Homeworld: <ButtonHomeWorld home={person.homeworld}/> <br/>
                </div>}
            </div>
        );
    }
}

export default FullPerson;