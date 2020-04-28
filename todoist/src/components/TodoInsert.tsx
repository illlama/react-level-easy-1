import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'modules/todos';
import { Button, Input, Form } from 'antd';
import 'scss/Todo.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onFinish = (e: any) => {
    console.log(value);
    dispatch(addTodo(value));
    setValue('');
  };

  return (
    <Form onFinish={onFinish} className="formTodo">
      <Form.Item
        label="Value"
        name="value"
        rules={[{ required: true, message: 'Please input your todo!' }]}
        className="inputTodo"
      >
        <Input onChange={onChange} placeholder="Complete your todoist." />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="inputTodo_button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoInsert;
