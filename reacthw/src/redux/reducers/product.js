import {SET_PRODUCT} from "../action_types";

const initialState = {
    product: []
}

export const product = (state=initialState, action) => {

    switch (action.type){
        case SET_PRODUCT: {
            action.payload.map(el => state.product.push(el))
            return {...state};
        }
        default: {
            return state;
        }
    }
}