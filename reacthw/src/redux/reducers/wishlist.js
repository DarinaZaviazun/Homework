import {SET_WISHLIST} from "../action-types";
import {UNSET_WISHLIST} from "../action-types";

const initialState = {
    wishlist: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_WISHLIST:{

            const updatedWishList = state.wishlist.filter(el => el.id !== action.payload.id)

            if(updatedWishList.length === state.wishlist.length){
                updatedWishList.push(action.payload)
            }
            return {...state, wishlist: updatedWishList};
        }
        case UNSET_WISHLIST: {
            return null;
        }
        default: {
            return state;
        }
    }
}