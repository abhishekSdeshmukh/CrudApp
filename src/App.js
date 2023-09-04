import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  // Retrieve todos from local storage or initialize as an empty array
  let storedTodos = localStorage.getItem('todos');

  // Ensure that storedTodos is valid JSON before parsing it
  if (!storedTodos || storedTodos === 'undefined') {
    storedTodos = '[]'; // Initialize as an empty array if not found or undefined
  }

  const initialState = JSON.parse(storedTodos);

  // To handle input
  const [input, setInput] = useState('');
  // To handle todo
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    // Store todos in local storage whenever it changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
