import "./home.css"
import {useEffect, useState} from "react";
import {moviesService} from "../services/MovieService";
import {FilmItem} from "./FilmItem";
import {Pagination} from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setGenres, setLoaded, setPagination} from "../../redux/action-creator";
import {Sort} from "./Sort";

export const Home = () => {

    const [movie, setMovieList] = useState([]);
    const {genres:{genres}, loaded:{loaded}} = useSelector(el => el)
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            fetchMovies();
        } catch (e){console.error(e)}
        genres.length === 0 && fetchGenres();
    },[])

    const fetchMovies = async (page) => {
        const data = await moviesService.getMovies(page);
        setMovieList(data.results);
        dispatch(setPagination([data.page, data.total_pages]));
        setTimeout(() => dispatch(setLoaded(true)), 500);
    }

    const fetchGenres = async () => {
        const {genres} = await moviesService.getGenres();
        dispatch(setGenres(genres));
    }

    return(
        <div className={"div-home1"}>
            {loaded ?
                <div>
                    <div id={"childId"}>
                        <div><Sort /></div>
                        <div className={"div-home"}>{movie.map(el =>
                            <FilmItem key={el.id} item={el}/>)}
                        </div>
                    </div>
                    <div>
                        <Pagination fetchMovies={fetchMovies}/>
                    </div>
                </div>
                :
                <div id={"Loading"}>Loading...</div>}
        </div>
    )
}