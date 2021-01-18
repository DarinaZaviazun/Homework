import {SET_GENRESFORSEARCH} from "../action-type";

const initialState = {genresForSearch:[]};

export const genresForSearch = (state= initialState, action) => {
    switch (action.type){

        case SET_GENRESFORSEARCH:{

            const updatedGenres = state.genresForSearch.filter(
                genr => genr !== action.payload);

            if (updatedGenres.length === state.genresForSearch.length)
                updatedGenres.push(action.payload);

            console.log(updatedGenres)

            return {...state, genresForSearch: updatedGenres}
        }

        default:
            return state;
    }
}