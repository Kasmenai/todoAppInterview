import React from 'react';
import './style.css';

const TodoList = ({ todos, deleteTodo, toggleCompleteTodo }) => {
  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <li className="list-item" key={todo.id}>
            <label
              className={`list-label${todo.isCompleted ? ' completed' : ''}`}
            >
              <input
                className="list-control"
                title="mark as done"
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleCompleteTodo(todo.id)}
              />
              {todo.text}
            </label>
            <button
              className="btn"
              title="delete"
              type="button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
