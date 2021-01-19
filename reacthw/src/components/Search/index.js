import {useDispatch, useSelector} from "react-redux";
import {FilmItem} from "../Home/FilmItem";
import {PaginationSearch} from "../Home/Pagination";
import {moviesService} from "../services/MovieService";
import {setGenres, setLoaded, setPagination, setSearch} from "../../redux/action-creator";
import {useEffect} from "react";

export const Search = () => {

    const {search:{search}, loaded:{loaded}, genres:{genres}} = useSelector(el => el);
    let word = search[2]

    const dispatch = useDispatch();
    let results = search.results;
    let pages = search.page;
    let total_pages = search.total_pages;

    useEffect(() => {
            genres.length === 0 && fetchGenres();
    },[])

    const fetchGenres = async () => {
        const {genres} = await moviesService.getGenres();
        dispatch(setGenres(genres));
    }

    const fetchSearch = async (word, page) => {
        const data = await moviesService.getSearch(word, page);
        dispatch(setPagination([data.page, data.total_pages, word]))
        dispatch(setSearch(data));
        dispatch(setLoaded(true));
        // setTimeout(() => dispatch(setLoaded(true)), 500);
    }

    return (
        <div className={"div-home1"}>
            {loaded ?
                <div>
                    <div className={"div-home"}>
                        {results && results.map(el =>
                            <FilmItem key={el.id} item={el} />)}
                    </div>
                    <div>
                        <PaginationSearch page={[pages, total_pages, word]} fetchSearch={fetchSearch}/>
                    </div>
                </div>
                :
                <div id={"Loading"}>Loading...</div>}
        </div>



    )
}