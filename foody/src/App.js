import React, { Component } from 'react';
import LoggedInView from './components/LoggedIn/LoggedInView.js';
import Login from './components/LoggedOut/Login.js'
import CreateAccount from './components/LoggedOut/CreateAccount.js'
import Welcome from './components/Welcome.js'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'loggedin'
    }
  }



getView(){
  const view = this.state.view;
  switch (view) {
    case 'login':
      return <Login />
    case 'signup':
      return <CreateAccount />
    case 'loggedin':
      return <LoggedInView />
    default:
      return <Welcome />
  }
}

  render() {
    return (
      <div className="App">

      {this.getView()}

      </div>
    );
  }
}

export default App;
