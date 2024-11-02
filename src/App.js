import React from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
