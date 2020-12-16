import React, {Component} from 'react';
import PlanetFromAPI from "../../services/PlanetFromAPI";
import FilmsFromAPI from "../../services/FilmsFromAPI";

class Films extends Component {

    state = {filmsvv: []};
    filmsFromAPI = new FilmsFromAPI()

    async componentDidMount() {
        let filmsvv = [];
        let {id} = this.props;
        const person = await this.filmsFromAPI.films(id)

        for (let a = 0; a < person.films.length; a++) {
            filmsvv.push(await fetch(person.films[a])
                .then(value => value.json())
                .then(value => {
                    return value.title
                }))
        }

        this.setState({filmsvv})
    }

    render() {
        const {filmsvv} = this.state

        return (
            <div>
                {
                    filmsvv &&
                    <div>
                        {
                            filmsvv.map(value => <p>{value}</p>)
                        }
                    </div>
                }

            </div>
        );
    }
}

export default Films;