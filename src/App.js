import React from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

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
      <MainPage
        currentUser={this.state.currentUser}
        onLogout={this.handleLogout}
      />
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    )
  }
}

export default App;
