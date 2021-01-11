import {SET_CART, SET_WISHLIST, SET_PRODUCT} from "../action_types";

export const setProducts = (payload) => ({type: SET_PRODUCT, payload});
export const setCart = (payload) => ({type: SET_CART, payload});
export const setWishlist = (payload) => ({type: SET_WISHLIST, payload});