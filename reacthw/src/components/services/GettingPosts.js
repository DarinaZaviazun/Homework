export class GettingPosts
{

    url = 'https://jsonplaceholder.typicode.com/posts'

    getAllPosts() {
        return fetch(this.url)
            .then(post => post.json())
            .then(post => {return post;})
    }
}