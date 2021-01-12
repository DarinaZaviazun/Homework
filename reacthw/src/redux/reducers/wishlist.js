import {SET_WISHLIST} from "../action_types";

const initialState = {
    wishlist: []
}

export const wishlist = (state=initialState, action) => {

    switch (action.type) {

        case SET_WISHLIST: {
            const UpdatedWishlist = state.wishlist.filter(el => el.id !== action.payload.id)

            if (UpdatedWishlist.length === state.wishlist.length){
                UpdatedWishlist.push(action.payload)
            }

            return {...state, wishlist: UpdatedWishlist};
        }

        default: {
            return state;
        }
    }
}