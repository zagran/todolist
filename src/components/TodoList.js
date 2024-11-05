import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import '../styles/components/TodoList.css';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
