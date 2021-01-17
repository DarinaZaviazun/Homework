export const FilmItem = (props) => {
    const {item: {original_title, genre_ids, poster_path, release_date, vote_average, vote_count}, genres} = props;

    const itemgenres = genre_ids.map(el => genres.find(elem => elem.id === el))

    return(
        <div className={"div-home-movie"}>
            <div><img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/></div>
            <h4>{original_title}</h4>
            <div>{release_date}</div>
            <div>{itemgenres.map(el => <span key={el.id}>{el.name}  </span>)}</div>
        </div>
    )
}