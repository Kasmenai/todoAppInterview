import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useTodoState = (initialState) => {
  const [todos, setTodos] = useState(initialState);

  return {
    todos,
    addTodo: (text) =>
      setTodos([...todos, { text, isCompleted: false, id: uuidv4() }]),
    deleteTodo: (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    toggleCompleteTodo: (id) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      setTodos(newTodos);
    },
  };
};

export default useTodoState;
