import React from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserConsumer, UserProvider } from './UserContext';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <UserProvider> 
        <UserConsumer>
          {({ user }) => 
            user ? (
              <MainPage />
            ) : (
              <LoginPage />
            )
          }
        </UserConsumer>
      </UserProvider>
    )
  }
}

export default App;
