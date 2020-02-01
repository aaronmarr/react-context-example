import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

import './MainPage.css';

const MainPage = () => (
  <main class="main-page">
    <Header />
    <TodoList />
  </main>
);

export default MainPage;