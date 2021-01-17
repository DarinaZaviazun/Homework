import "./home.css"
import {useEffect, useState} from "react";
import {moviesService} from "../services/MovieService";
import {FilmItem} from "./FilmItem";

export const Home = () => {

    const [movie, setMovieList] = useState([]);
    const [genres, setGenres] = useState([]);

    console.log(movie)

    useEffect(() => {
        fetchMovies();
        genres.length === 0 && fetchGenres();
    }, [])

    const fetchMovies = async () => {
        const {results} = await moviesService.getMovies();
        setMovieList(results);
    }

    const fetchGenres = async () => {
        const {genres} = await moviesService.getGenres();
        setGenres(genres);
    }



    return(
        <div className={"div-home1"}>
            <div className={"div-home"}>{movie.map(el =>
                <FilmItem key={el.id} item={el} genres={genres}/>
            )}</div>
        </div>
    )
}