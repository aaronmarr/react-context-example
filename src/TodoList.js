import React from 'react';
import UserContext from './UserContext';

import './TodoList.css';

const TodoList = () => (
  <UserContext.Consumer>
    {(user) => (
      <div class="todo-list">
        <p>There are no todos, {user.firstName}!</p>
      </div>
    )}
  </UserContext.Consumer>
);

export default TodoList;