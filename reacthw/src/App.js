import React from 'react';
import {PageLayout} from "./components/PageLayout";
import {Home} from "./components/Home";
import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from 'react-router-dom';
import {Search} from "./components/Search";

export default function App() {


    return (
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
    );
  }


