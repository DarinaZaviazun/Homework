export default class PlanetFromAPI{

    url = 'https://swapi.dev/api/planets/';

    async planet(id){
        return await fetch(this.url + `${id}`)
            .then(value => value.json())
    }
}