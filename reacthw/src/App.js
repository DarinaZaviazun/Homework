import React, {Component} from 'react';
import "./App.css"
import createUser from "./User/createUser";

class App extends Component {

  inputMain = React.createRef();
  state = {inputValue: "", user: ""};

  onInputFill = () => {
    this.setState({inputValue: this.inputMain.current.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    createUser(this.state.inputValue).then(value => this.setState({user: value}))
  }

  render() {
    let {inputValue, user} = this.state;

    return (
        <div>
          <form onSubmit={this.onFormSubmit} className={"forForm"}>
            Выберите пользователя с id от 1 до 10: <br/>
            <input ref={this.inputMain} type={'number'}  min="1" max="10" onInput={this.onInputFill} value={inputValue}
            placeholder={"from 1 to 10"}/>
            <button>Get user from API</button>
          </form>

          {
            user &&
            <div className={'forUser'}>
              ID: {user.id} <br/>
              Name: {user.name} <br/>
              E-mail: {user.email} <br/>
              Phone: {user.phone} <br/>
              Web-site: {user.website} <br/>
              Company: {user.company.name} <br/>
              City: {user.address.city} <br/>
            </div>
          }
        </div>
    );
  }
}

export default App;