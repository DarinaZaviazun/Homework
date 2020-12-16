import React, {Component} from 'react';
import PlanetFromAPI from "../../services/PlanetFromAPI";

class Planet extends Component {

    state = {planet: null};
    planetFromApi = new PlanetFromAPI()

    async componentDidMount() {
        let residents = [];
        let {id} = this.props;
        const planet = await this.planetFromApi.planet(id)

        for (let a = 0; a < planet.residents.length; a++) {
            residents.push(await fetch(planet.residents[a])
                .then(value => value.json())
                .then(value => {
                    return value.name
                }))
        }

        this.setState({planet})
        this.setState({residents})
    }

    render() {
        const {planet} = this.state
        const {residents} = this.state
        return (
            <div>
                {planet && residents &&
                <div className={'detailed'}>
                    Planet: {planet.name}<br/>
                    Rotation period: {planet.rotation_period}<br/>
                    Diameter: {planet.diameter}<br/>
                    Residents of this planet: {residents.map(value => ` ${value} *`)}
                </div>}
            </div>
        );
    }
}

export default Planet;