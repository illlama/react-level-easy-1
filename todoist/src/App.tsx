import React from 'react';
import TodoInsert from 'components/TodoInsert';
import TodoList from 'components/TodoList';
import './App.css';

function App() {
  return (
    <div className="container">
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App;
