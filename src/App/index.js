import React from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import TodoFilter, { filterTodos } from '../TodoFilter';
import useTodoState from './useTodoState';
import useFilterState from './useFilterState';

import './style.css';

function App() {
  const { todos, addTodo, deleteTodo, toggleCompleteTodo } = useTodoState([]);

  const { filter, onFilterChange } = useFilterState({
    name: 'all',
    label: 'All',
  });

  const visibleTodos = filterTodos(filter, todos);

  return (
    <div className="app">
      <h1>Todo app</h1>
      <TodoForm saveTodo={addTodo} />
      <TodoFilter currentFilter={filter} onFilterChange={onFilterChange} />
      {todos.length > 0 && (
        <TodoList
          todos={visibleTodos}
          deleteTodo={deleteTodo}
          toggleCompleteTodo={toggleCompleteTodo}
        />
      )}
    </div>
  );
}

export default App;
