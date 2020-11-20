import React from 'react';
import useInputState from './useInputState';

import './style.css';

const TodoForm = ({ saveTodo }) => {
  const { value, onChange, reset } = useInputState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = value.trim();

    if (!todoText) return;

    saveTodo(todoText);
    reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        value={value}
        onChange={onChange}
        placeholder="Add some todo"
        type="text"
      />
    </form>
  );
};

export default TodoForm;
