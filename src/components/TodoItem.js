import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../features/todos/todosSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => dispatch(toggleComplete(todo.id))}>
        {todo.completed ? '✔️' : '❌'} {todo.text}
      </span>
      <button className='delete-button' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}

export default TodoItem;
