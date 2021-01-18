import {SET_FLAGFORGENRE} from "../action-type";

const initialState = {flagForGenre: false};

export const flagForGenre = (state = initialState, action) => {

    switch (action.type){

        case SET_FLAGFORGENRE: {
            return {...state, flagForGenre: action.payload};
        }

        default: {
            return state;
        }
    }
}