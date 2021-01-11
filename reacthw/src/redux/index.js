import {createStore} from "redux";
import {reducer} from "./reducers";

const store = createStore(reducer);

export default store;
export * from "./action_creators";
export * from "./action_types";