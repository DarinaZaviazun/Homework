import {SET_CART} from "../action_types";
import {act} from "@testing-library/react";

const initialState = {
    cart: []
}

export const cart = (state=initialState, action) => {

    switch (action.type) {

        case SET_CART: {
            let updatedCart = state.cart.filter(el => el.id !== action.payload.id);

            if (updatedCart.length === state.cart.length)
                updatedCart.push(action.payload)

            return {...state, cart: updatedCart};
        }

        default: {
            return state;
        }
    }
}