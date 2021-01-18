import React from 'react';
import {PageLayout} from "./components/PageLayout";
import {Home} from "./components/Home";
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import {Search} from "./components/Search";
import {Provider} from "react-redux";
import {store} from "./redux";
import {FilmPage} from "./components/FilmPage";

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
                            <Route exact path="/movie/:id">
                                <FilmPage />
                            </Route>
                        </Switch>
                    </PageLayout>
                </div>
            </Router>
        </Provider>
    );
}


