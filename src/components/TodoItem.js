import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../features/todos/todosSlice';
import { TodoPropTypes } from '../types/TodoTypes';
import PropTypes from 'prop-types'; 
import '../styles/components/TodoItem.css';

TodoItem.propTypes = {
  todo: TodoPropTypes,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => dispatch(toggleComplete(todo.id))}>
        {todo.completed ? '✔️' : '❌'} <span className='todo-text'>{todo.text}</span>
      </span>
      <button className='delete-button' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}

export default TodoItem;
