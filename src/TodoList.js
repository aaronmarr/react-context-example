import React from 'react';
import { UserConsumer } from './UserContext';

import './TodoList.css';

const TodoList = () => (
  <UserConsumer>
    {({ user }) => (
      <div class="todo-list">
        <p>There are no todos, {user.firstName}!</p>
      </div>
    )}
  </UserConsumer>
);

export default TodoList;