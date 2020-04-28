import React from 'react';
import moment from 'moment';
import { Todo } from 'modules/todos';
import 'scss/Todo.scss';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const uploadTime = moment(todo.date).toISOString().slice(0, 10);
  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span>{todo.text}</span>
      <span>{uploadTime}</span>
    </li>
  );
};

export default TodoItem;
