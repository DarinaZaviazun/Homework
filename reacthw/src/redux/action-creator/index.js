import {SET_LOADED, SET_SEARCH, SET_GENRES, SET_PAGINATION, SET_GENRESFORSEARCH, SET_FLAGFORGENRE} from "../action-type";

export const setSearch = (payload) => ({type: SET_SEARCH, payload});
export const setGenres = (payload) => ({type: SET_GENRES, payload});
export const setLoaded = (payload) => ({type: SET_LOADED, payload});
export const setPagination = (payload) => ({type: SET_PAGINATION, payload});
export const setGenresForSearch = (payload) => ({type: SET_GENRESFORSEARCH, payload});
export const setFlagForGenre = (payload) => ({type: SET_FLAGFORGENRE, payload});


