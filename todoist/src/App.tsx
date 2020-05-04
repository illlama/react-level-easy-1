import React from 'react';
import TodoInsert from 'components/TodoInsert';
import TodoList from 'components/TodoList';
import './App.scss';

function App() {
  return (
    <div className="container">
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App;
