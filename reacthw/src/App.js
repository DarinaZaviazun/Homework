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
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link  className={'navigation'} to="/">Home</Link>
                        </li>
                        <li>
                            <Link  className={'navigation'} to="/people">People</Link>
                        </li>

                    </ul>
                </nav>
            </div>

        <div className="Back">
                <Switch>
                    <Route path={`/people`} exact={true} render={(props) =>{
                        let {match: {params: {id}}} = props;
                        return <div className='BlockForPeople'><AllPeople key={id}/></div>
                    }}/>

                    <Route path={`/people/:id`} exact={true} render={(props) =>{
                        let {match: {params: {id}}} = props;
                        return <div className='BlockForPerson'><FullPerson id={id} key={id}/></div>
                    }}/>

                    <Route path={`/person/:id/films`} exact={true} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <div className='BlockForFilms'>Films with character # {id}<Films id={id} key={id}/></div>
                    }}/>

                    <Route path={`/planets/:id`} exact={true} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <div className='BlockForPlanet'><Planet id={id} key={id}/></div>
                    }}/>
                </Switch>
        </div>
        </Router>
    );
  }
}

export default App;
