import React, {Component} from 'react';
import PlanetFromAPI from "../../services/PlanetFromAPI";


class Planet extends Component {
    state = {planet: null};
    planetFromApi = new PlanetFromAPI()

    async componentDidMount() {
        let {id} = this.props;
        const planet = await this.planetFromApi.planet(id)
        this.setState({planet})
    }

    render() {
        const {planet} = this.state
        return (
            <div>
                {planet &&
                <div className={'detailed'}>
                    Planet: {planet.name}<br/>
                    Rotation period: {planet.rotation_period}<br/>
                    Diameter: {planet.diameter}<br/>
                    Residents: {planet.residents}
                </div>}
            </div>
        );
    }
}

export default Planet;