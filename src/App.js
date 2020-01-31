import React from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import UserContext from './UserContext';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: null
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return this.state.currentUser ? (
      <UserContext.Provider value={this.state.currentUser}>
        <MainPage
          onLogout={this.handleLogout}
        />
      </UserContext.Provider>
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    )
  }
}

export default App;
