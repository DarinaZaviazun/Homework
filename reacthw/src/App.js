import React, {Component} from 'react';
import AllPeople from "./components/all-people/AllPeople";
import "./App.css"
import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from 'react-router-dom';
import FullPerson from "./components/fullUser/Full-person";
import Planet from "./components/planets/Planet";
import Films from "./components/Films/Films";

class App extends Component {
  render() {
    return (
        <Router>
        <div className="Back">
            <div className="BlockForPeople">
                <AllPeople/>
            </div>

                <Switch>
                    <Route path={`/people/:id`} exact={true} render={(props) =>{
                        let {match: {params: {id}}} = props;
                        return <div className='BlockForPerson'><FullPerson id={id} key={id}/></div>
                    }}/>
                    <Route path={`/planets/:id`} exact={true} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <div className='BlockForPlanet'><Planet id={id} key={id}/></div>
                    }}/>
                    <Route path={`/person/:id/films`} exact={true} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <div className='BlockForFilms'>Films with character # {id}<Films id={id} key={id}/></div>
                    }}/>
                </Switch>

        </div>
        </Router>
    );
  }
}

export default App;
