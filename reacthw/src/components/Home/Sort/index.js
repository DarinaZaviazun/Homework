import "./sort.css"
import {useDispatch, useSelector} from "react-redux";
import {setFlagForGenre, setGenresForSearch} from "../../../redux/action-creator";

export const Sort = () => {

    const {genres:{genres}, flagForGenre:{flagForGenre}} = useSelector(el => el)
    const dispatch = useDispatch();


    const Sortirovka = (genreId) => {
        dispatch(setGenresForSearch(genreId));
    }


    let html = document.querySelector('html');

    html.addEventListener('click', function(e) {
        if(flagForGenre === false && e.target.className === 'genre-one' ){
            try{
                e.path[0].classList.add("choosen");
                dispatch(setFlagForGenre(!flagForGenre))
                // setTimeout(() => {dispatch(setFlagForGenre(!flagForGenre))}, 5)
            }
            catch(e){
                console.log(e)
            }
        }
        if(flagForGenre === true && e.target.className === 'genre-one choosen' ){
            try{
                e.path[0].classList.remove("choosen");
                dispatch(setFlagForGenre(!flagForGenre))
                // setTimeout(() => {dispatch(setFlagForGenre(!flagForGenre))}, 5)
            }
            catch(e){
                console.log(e)
            }
        }
    });


    return (
        <div className={"sortirovka"}>
            <div id={"div-genres-sort"}>Genres:</div>
            <div className={"genres-names"}>

                {genres.map(el =>
                    <div className={"genre-one"} id={el.id} key={el.id} onClick={() => Sortirovka(el.id)}>
                        {el.name}
                    </div>
                )}
            </div>
        </div>
    )
}