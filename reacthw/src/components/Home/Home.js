import "./home.css"
import {useEffect, useState} from "react";
import {moviesService} from "../services/MovieService";
import {FilmItem} from "./FilmItem";
import {Pagination} from "./Pagination";

export const Home = () => {

    const [movie, setMovieList] = useState([]);
    const [genres, setGenres] = useState([]);
    let [isLoaded, setIsLoaded] = useState(null);
    const [page, setPage] = useState(null)

    console.log(movie)

    useEffect(() => {
        try {
            fetchMovies();
        } catch (e){console.error(e)}
        genres.length === 0 && fetchGenres();
    }, [])

    const fetchMovies = async (page) => {
        const data = await moviesService.getMovies(page);
        setMovieList(data.results);
        setPage(data.page)

        setTimeout(() => setIsLoaded(true), 500);
    }

    const fetchGenres = async () => {
        const {genres} = await moviesService.getGenres();
        setGenres(genres);
    }

    return(
        <div className={"div-home1"}>
            {isLoaded ?
                <div>
                    <div className={"div-home"}>{movie.map(el =>
                        <FilmItem key={el.id} item={el} genres={genres}/>)}
                    </div>
                    <div><Pagination page={page} fetchMovies={fetchMovies}/></div>
                </div>
                :
                <div id={"Loading"}>Loading...</div>}
        </div>
    )
}