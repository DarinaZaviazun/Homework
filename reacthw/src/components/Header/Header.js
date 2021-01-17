import "./header.css"
import {useState} from "react";
import {moviesService} from "../services/MovieService";
import {Link} from "react-router-dom";

export const Header = () => {

    const [request, setRequest] = useState("");

    const findValue = (event) => {
        setRequest(event.target.value)
    }

    const find = (event) => {
        event.preventDefault()
        request.length > 0 && fetchSearch(request);

    }

    const fetchSearch = async (word) => {
        const data = await moviesService.getSearch(word);
        console.log(data.results)
    }

    return (
        <div className={"div-header"}>
            <span>Header</span>
            <input type="text" onInput={findValue} placeholder={"Введите название фильма"}/>
            <button onClick={find}><Link to="/search">Search!</Link></button>
        </div>
    )
}