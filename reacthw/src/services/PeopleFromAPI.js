export default class PeopleFromAPI{

    url = 'https://swapi.dev/api/people/';

    async peoples(){
        return await fetch(this.url)
            .then(value => value.json())
            .then(value => value.results)
    }

    async people(id){
        return await fetch(this.url + `${id}`)
            .then(value => value.json())

    }
}