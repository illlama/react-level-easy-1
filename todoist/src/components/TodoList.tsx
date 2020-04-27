import React from 'react';
import { Todo } from 'modules/todos';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

const TodoList = () => {
  const todos: Todo[] = useSelector((state: RootState) => state.todos);

  if (todos.length === 0) return <p>No data</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
