import "./header.css"
import {moviesService} from "../services/MovieService";
import {Link} from "react-router-dom";
import Logo from "../../images/tmdb.png"
import {useDispatch} from "react-redux";
import {setLoaded, setPagination, setSearch} from "../../redux/action-creator";
import { useHistory } from "react-router-dom";

export const Header = () => {
    let request = "";
    const dispatch = useDispatch();

    const findValue = (event) => {
       request = event.target.value;
    }

    const find = (event) => {
        event.preventDefault()
        dispatch(setLoaded(false));
        request.length > 0 && fetchSearch(request, 1);
    }

    let history = useHistory();

    const FunctionKeyDown = (event) => {
        if (event.key === "Enter")
            history.push("/search")
    }

    const fetchSearch = async (word, page) => {

        const data = await moviesService.getSearch(word, page);
        dispatch(setPagination([data.page, data.total_pages, word]))
        dispatch(setSearch(data));
        setTimeout(() => dispatch(setLoaded(true)), 500);
    }

    return (
        <div className={"div-header"}>
            <div>
                <Link to={"/"}><img src={Logo} alt={"logo"} /></Link>
            </div>
            <form className={"div-search"} action={"/search"}>
                <input onInput={findValue} placeholder={"Введите название фильма"} onKeyDown={FunctionKeyDown}/>
                <button onClick={find}><Link to="/search">Search!</Link></button>
            </form>
        </div>
    )
}