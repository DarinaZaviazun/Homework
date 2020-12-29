import {SET_PRODUCTS} from "../action-types"
import {SET_WISHLIST} from "../action-types"
import {UNSET_WISHLIST} from "../action-types"


export const setProducts = (payload) => ({type: SET_PRODUCTS, payload})
export const setWishList = (payload) => ({type: SET_WISHLIST , payload})
export const unsetWishList = (payload) => ({type: UNSET_WISHLIST , payload})
