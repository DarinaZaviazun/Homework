import "./pagination.css"
import {useSelector} from "react-redux";

export const Pagination = ({fetchMovies}) => {

    const {pagination:{pagination}} = useSelector(el => el)
    let page = pagination[0];
    let pages = pagination[1];
    let srt = "<<";

    return(
        pagination &&
        <div className={"pagination"}>
            <button disabled={page === 1} onClick= {() => fetchMovies(1)}>To first</button>
            <button disabled={page === 1} onClick= {() => page > 1 ? fetchMovies(page - 1) : ""}> {srt} </button>
            <div>Current page {page}</div>
            <button disabled={page === pages} onClick= {() => page < pages ? fetchMovies(page + 1) : ""}> >> </button>
            <button disabled={page === pages} onClick= {() => fetchMovies(pages)}>To last</button>
        </div>
    )
}

export const PaginationSearch = ({fetchSearch}) => {

    const {pagination:{pagination} } = useSelector(el => el)
    let page = pagination[0];
    let pages = pagination[1];
    let word = pagination[2];
    let srt = "<<";

    return(
        pagination &&
        <div className={"pagination"}>
            <button disabled={page === 1} onClick= {() => fetchSearch(word, 1)}>To first</button>
            <button disabled={page === 1} onClick= {() => page > 1 ? fetchSearch(word,page - 1) : ""}> {srt} </button>
            <div>Current page {page}</div>
            <button disabled={page === pages} onClick= {() => page < pages ? fetchSearch(word,page + 1) : ""}> >> </button>
            <button disabled={page === pages} onClick= {() => fetchSearch(word, pages)}>To last</button>
        </div>
    )
}