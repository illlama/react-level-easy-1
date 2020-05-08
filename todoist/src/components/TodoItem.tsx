/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import moment from 'moment';
import { Todo, toggleTodo, removeTodo, modifyTodo } from 'modules/todos';
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
  const onModify = () => {
    setModify(!modify);
    setMemoDisplay(true);
  };
  const modifyContent = (id: number) => {
    dispatch(modifyTodo(modifyTitle, modifyMemo, id));
    setModify(false);
  };

  return (
    <div className="todoBox">
      <li className={`todoItem ${todo.done ? 'done' : ''}`}>
        <div
          className={`todoContent ${modify ? 'modify' : ''}`}
          onClick={onMemoDisplay}
        >
          {modify ? (
            <Form>
              <Form.Item>
                <Input
                  onChange={(e) => setModifyTitle(e.target.value)}
                  defaultValue={modifyTitle}
                />
              </Form.Item>
            </Form>
          ) : (
            <span>{todo.text}</span>
          )}
          <span className="todoDate">{uploadTime}</span>
        </div>

        <div className="todoButton">
          <span className="todoRemove" onClick={() => onRemove(todo.id)}>
            ❌
          </span>
          <span className="todoModify" onClick={onModify}>
            🖋
          </span>
          <div
            className={`todoDone ${todo.done ? 'done' : ''}`}
            onClick={() => onToggle(todo.id)}
          />
        </div>

        <br />
      </li>
      {memoDisplay ? (
        modify ? (
          <Form onFinish={() => modifyContent(todo.id)}>
            <Form.Item>
              <Input.TextArea
                className="todoMemo"
                onChange={(e) => setModifyMemo(e.target.value)}
                value={modifyMemo}
                autoSize={{ minRows: 5, maxRows: 30 }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                style={{ marginBottom: '20px' }}
              >
                Modify
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <p className={`todoMemo ${todo.done ? 'done' : ''}`}>{todo.memo}</p>
        )
      ) : null}
    </div>
  );
};

export default TodoItem;
