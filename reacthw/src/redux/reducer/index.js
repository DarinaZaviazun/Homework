import {combineReducers} from "redux";
import {search} from "./search";
import {genres} from "./genres";
import {loaded} from "./loaded";
import {pagination} from "./pagination";
import {genresForSearch} from "./genresForSearch";

export const reducer = combineReducers({search, genres, loaded, pagination, genresForSearch})