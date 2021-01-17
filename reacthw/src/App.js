import React from 'react';
import {Header} from "./components/header";
import "./App.css"
import {Body} from "./components/body";
import {Provider} from "react-redux";
import store from "./redux";


export const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <Body />
            </div>
        </Provider>
    )
}