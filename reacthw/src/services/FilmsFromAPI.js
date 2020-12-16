export default class FilmsFromAPI{

    url = 'https://swapi.dev/api/people/';

    async films(id){
        return await fetch(this.url + `${id}`)
            .then(value => value.json())
    }
}

