class MovieService {
    url = "https://api.themoviedb.org";


    async getMovies() {
        return await fetch(this.url + '/4/discover/movie',
            {headers:
                    { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWI1YmI2YTVkNjIxYmJlNTNmOWE4ZGRiNzZjYTJiNyIsInN1YiI6IjYwMDNmNDBlYTY3MjU0MDAzZjEyODFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.77vOg9uGfxt8JbNX7snDGv2XttSayumrjdDgoXbxyMs'} })
            .then(el => el.json())

    }

    async getMovieByID(id) {
        return await fetch(this.url + `/4/movie/${id}`,
            {headers:
                    { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWI1YmI2YTVkNjIxYmJlNTNmOWE4ZGRiNzZjYTJiNyIsInN1YiI6IjYwMDNmNDBlYTY3MjU0MDAzZjEyODFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.77vOg9uGfxt8JbNX7snDGv2XttSayumrjdDgoXbxyMs'} })
            .then(el => el.json())

    }

    async getGenres() {
        return await fetch(this.url + "/3/genre/movie/list",
            {headers:
                    { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWI1YmI2YTVkNjIxYmJlNTNmOWE4ZGRiNzZjYTJiNyIsInN1YiI6IjYwMDNmNDBlYTY3MjU0MDAzZjEyODFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.77vOg9uGfxt8JbNX7snDGv2XttSayumrjdDgoXbxyMs'} })
            .then(el => el.json())
    }
}

export const moviesService = new MovieService();

