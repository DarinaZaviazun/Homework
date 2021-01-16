import {SET_FLAGFORMENU} from "../action_types";

const initialState = {flagForMenu: null};

export const flagForMenu = (state = initialState, action) => {

    switch (action.type){

        case SET_FLAGFORMENU: {
            return {...state, flagForMenu: action.payload};
        }

        default: {
            return state;
        }
    }
}