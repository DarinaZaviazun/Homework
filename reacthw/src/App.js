import React from 'react';
import {PageLayout} from "./components/PageLayout";
import {Home} from "./components/Home";
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import {Search} from "./components/Search";
import {Provider} from "react-redux";
import {store} from "./redux";

export default function App() {


    return (
        <Provider store={store}>
            <Router>
                <div>
                    <PageLayout>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/search">
                                <Search />
                            </Route>
                        </Switch>
                    </PageLayout>
                </div>
            </Router>
        </Provider>
    );
}


