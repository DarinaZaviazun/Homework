import {SET_CART, SET_WISHLIST, SET_PRODUCT, SET_FLAGFORMENU} from "../action_types";

export const setProducts = (payload) => ({type: SET_PRODUCT, payload});
export const setCart = (payload) => ({type: SET_CART, payload});
export const setWishlist = (payload) => ({type: SET_WISHLIST, payload});
export const setFlagForMenu = (payload) => ({type: SET_FLAGFORMENU, payload});