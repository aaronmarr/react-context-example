import React from 'react';

import './TodoList.css';

const TodoList = ({ currentUser }) => (
  <div class="todo-list">
    <p>There are no todos, {currentUser.firstName}!</p>
  </div>
);

export default TodoList;