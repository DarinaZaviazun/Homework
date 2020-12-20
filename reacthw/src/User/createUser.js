export default function createUser(inputValue) {

    return fetch('https://jsonplaceholder.typicode.com/users/' + inputValue)
        .then(value => value.json())
}