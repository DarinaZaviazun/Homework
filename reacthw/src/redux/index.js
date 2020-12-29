import {createStore} from "redux";
import {reducer} from "./reducers";

const store = createStore(reducer);

export default store;
export * from "./action-creators";
export * from "./action-types"