import React from 'react';
import '../styles/components/Header.css';
import { useSelector } from 'react-redux';

function Header() {
  const { addedCount, completedCount, deletedCount } = useSelector((state) => state.todos);

  return <header className="header">
    <h1>Todo List</h1>
    <h4>Total added: {addedCount}, completed: {completedCount}, delete: {deletedCount}</h4>
    </header>;
}

export default Header;