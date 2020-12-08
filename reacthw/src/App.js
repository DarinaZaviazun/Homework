import React, {Component} from 'react';
import UsersFromApi from "./components/UsersFromApi";

class App extends Component {
    render() {
        return (
            <div>
              <UsersFromApi />
            </div>
        );
    }
}

export default App;