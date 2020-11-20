import React from 'react';

import './style.css';

const filterItems = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'completed', label: 'Completed' },
];

export const filterTodos = (filter, todos) => {
  switch (filter.name) {
    case 'completed':
      return todos.filter((todo) => todo.isCompleted);
    case 'active':
      return todos.filter((todo) => !todo.isCompleted);
    default:
      return todos;
  }
};

const FilterItem = ({ filter, currentFilter, onFilterChange }) => {
  return (
    <label className="filter-item">
      <input
        className="filter-input"
        type="radio"
        name="filter"
        value={filter.name}
        checked={filter.name === currentFilter.name}
        onChange={(e) => onFilterChange(filter)}
      />
      {filter.label}
    </label>
  );
};

const TodoFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filters">
      {filterItems.map((item) => (
        <FilterItem
          key={item.name}
          filter={item}
          currentFilter={currentFilter}
          onFilterChange={onFilterChange}
        />
      ))}
    </div>
  );
};

export default TodoFilter;
