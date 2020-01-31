import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

import './MainPage.css';

const MainPage = ({ onLogout }) => (
  <main class="main-page">
    <Header onLogout={onLogout} />
    <TodoList />
  </main>
);

export default MainPage;