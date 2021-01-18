import {moviesService} from "../services/MovieService";
import {setLoaded, setPagination} from "../../redux/action-creator";
import {useEffect} from "react";
import {useState} from "react";
import "./filmpage.css"

export const FilmPage = () => {

    let filmid = window.location.href.split("movie/")[1];
    let data = "";
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        try {
            fetchMovie(filmid);
        } catch (e){console.error(e)}
    },[])

    const fetchMovie = async (filmid) => {
         data = await moviesService.getMovieByID(filmid);
        console.log(data);
        setMovie(data);
    }

    let imagepath = movie.poster_path ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}` : ""




    return(
        <div className={"film"}>
            <div><img src={imagepath} alt={movie.original_title}/></div>
            <div>Title: {movie.title}</div>
            <div>The rest information</div>
        </div>
    )
}