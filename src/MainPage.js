import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

import './MainPage.css';

const MainPage = ({ currentUser, onLogout }) => (
  <main class="main-page">
    <Header 
      currentUser={currentUser} 
      onLogout={onLogout} 
    />
    <TodoList currentUser={currentUser} />
  </main>
);

export default MainPage;