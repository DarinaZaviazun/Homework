import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const FilmItem = (props) => {
    const {item: {original_title, genre_ids, poster_path, release_date, id}} = props;
    const {genres:{genres}} = useSelector(el => el)

    let imagepath = poster_path ? `https://image.tmdb.org/t/p/w200/${poster_path}` : ""
    const itemgenres = genre_ids.map(el => genres.find(elem => elem.id === el))

    return(
        <Link to={`/movie/${id}`}>
            <div className={"div-home-movie"}>
                <div id={"id1"}><img src={imagepath} alt={original_title}/></div>
                <h4>{original_title}</h4>
                <div className={"div-year"}>{release_date}</div>
                <div className={"div-genres"}>{itemgenres.map(el => <span key={el.id}>{el.name}  </span>)}</div>
            </div>
        </Link>
    )
}