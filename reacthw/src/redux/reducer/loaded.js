import {SET_LOADED} from "../action-type";

const initialState = {loaded: false};

export const loaded = (state= initialState, action) => {
    switch (action.type){
        case SET_LOADED:{

            return {...state, loaded: action.payload}
        }

        default:
            return state;
    }
}