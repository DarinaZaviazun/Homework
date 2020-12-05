import React, {Component} from 'react';
import {usersWithAddress} from "./DataBase/usersWA";
import UsersComponents from "./Components/UsersComponents";

class App extends Component {
    render() {
        return (
            <div>
                {
                    usersWithAddress.map((user, index) => {
                        let cls = index % 2 ? "odd" : "even";

                        return (
                        <UsersComponents
                            user={user}
                            key={index}
                            cls={cls}/>
                    )
                    })
                }
            </div>
        );
    }
}

export default App;