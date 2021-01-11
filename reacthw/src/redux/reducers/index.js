import {combineReducers} from "redux";
import {wishlist} from "./wishlist";
import {cart} from "./cart";
import {product} from "./product";


export const reducer = combineReducers({
    //cart,
    //wishlist,
    product
})