import "./pagination.css"

export const Pagination = ({page, fetchMovies}) => {

    let srt = "<<";


    return(
        <div className={"pagination"}>
            <button disabled={page === 1} onClick= {() => fetchMovies(1)}>To first</button>
            <button disabled={page === 1} onClick= {() => page > 1 ? fetchMovies(page - 1) : ""}> {srt} </button>
            <div>Current page {page}</div>
            <button disabled={page === 500} onClick= {() => page < 500 ? fetchMovies(page + 1) : ""}> >> </button>
            <button disabled={page === 500} onClick= {() => fetchMovies(500)}>To last</button>
        </div>
    )
}