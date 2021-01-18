import {combineReducers} from "redux";
import {search} from "./search";
import {genres} from "./genres";
import {loaded} from "./loaded";
import {pagination} from "./pagination";

export const reducer = combineReducers({search, genres, loaded, pagination})