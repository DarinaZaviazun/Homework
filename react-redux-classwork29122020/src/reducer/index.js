import {combineReducers} from "redux";
import list from "./listWords"

export const reducer = combineReducers({list});
export const addValue = (payload) => ({type: "ADD_TO_LIST", payload})
export const deleteValue = (payload) => ({type: "DELETE_FROM_LIST", payload})
