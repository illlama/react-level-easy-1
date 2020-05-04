/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, memo } from 'react';
import moment from 'moment';
import { Todo, toggleTodo, removeTodo } from 'modules/todos';
import { Button, Input, Form, Row, Col } from 'antd';

import 'scss/Todo.scss';
import { useDispatch } from 'react-redux';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const uploadTime = moment(todo.date).toISOString().slice(0, 10);
  const dispatch = useDispatch();
  const [memoDisplay, setMemoDisplay] = useState(false);
  const [modifyTitle, setModifyTitle] = useState(todo.text);
  const [modifyMemo, setModifyMemo] = useState(todo.memo);
  const [modify, setModify] = useState(false);

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };
  const onMemoDisplay = () => {
    if (!modify) {
      setMemoDisplay(!memoDisplay);
    }
  };
  const modifyContent = () => {
    setModify(!modify);
    setMemoDisplay(!memoDisplay);
  };
  const Memo = () => {
    if (memoDisplay) {
      return modify ? (
        <Input.TextArea
          className="todoMemo"
          onChange={(e) => setModifyMemo(e.target.value)}
          placeholder="Add description about yout todo content."
          autoSize={{ minRows: 5, maxRows: 30 }}
        />
      ) : (
        <p className="todoMemo">{todo.memo}</p>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="todoBox">
      <li className={`todoItem ${todo.done ? 'done' : ''}`}>
        <div
          className={`todoContent ${modify ? 'modify' : ''}`}
          onClick={onMemoDisplay}
        >
          {modify ? (
            <Form.Item name="value" style={{ width: 200, float: 'left' }}>
              <Input
                onChange={(e) => setModifyTitle(e.target.value)}
                placeholder={todo.text}
                className="modifyTitle"
              />
            </Form.Item>
          ) : (
            <span>{todo.text}</span>
          )}
          <span className="todoDate">{uploadTime}</span>
        </div>

        <div className="todoButton">
          <span className="todoRemove" onClick={() => onRemove(todo.id)}>
            ❌
          </span>
          <span className="todoModify" onClick={modifyContent}>
            🖋
          </span>
          <div
            className={`todoDone ${todo.done ? 'done' : ''}`}
            onClick={() => onToggle(todo.id)}
          />
        </div>

        <br />
      </li>
      <Memo />
    </div>
  );
};

export default TodoItem;
