import {SET_FLAGFORMENU} from "../action_types";

const initialState = {flagForMenu: false};

export const flagForMenu = (state = initialState, action) => {

    switch (action.type){

        case SET_FLAGFORMENU: {
            let newFlag = action.payload;
            return {...state, flagForMenu: newFlag};
        }

        default: {
            return state;
        }
    }
}