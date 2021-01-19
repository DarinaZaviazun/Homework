import "./sort.css"
import {useDispatch, useSelector} from "react-redux";
import {setGenresForSearch} from "../../../redux/action-creator";

export const Sort = () => {

    const {genres:{genres}, genresForSearch:{genresForSearch}} = useSelector(el => el)
    const dispatch = useDispatch();

    const Sortirovka = (genreId) => {
        dispatch(setGenresForSearch(genreId));
    }




    return (
        <div className={"sortirovka"}>
            <div id={"div-genres-sort"}>Genres:</div>
            <div className={"genres-names"}>

                {genres.map(el =>
                    <div className={genresForSearch.includes(el.id) ? "genre-one-choosen" : "genre-one"} id={el.id} key={el.id} onClick={() => Sortirovka(el.id)}>
                        {el.name}
                    </div>
                )}

            </div>
        </div>
    )
}