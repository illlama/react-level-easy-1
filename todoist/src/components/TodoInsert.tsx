import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'modules/todos';
import { Button, Input, Form, Row, Col } from 'antd';
import 'scss/Todo.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  const [memo, setMemo] = useState('');
  const [displayMemo, setDisplayMemo] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  ///form을 초기화 시키는 방법 https://stackoverflow.com/a/61046118/11349800

  const onFinish = (e: any) => {
    dispatch(addTodo(value, memo));
    form.resetFields();
    setValue('');
    setMemo('');
  };
  const onMemo = () => {
    setDisplayMemo(!displayMemo);
  };

  return (
    <Form form={form} onFinish={onFinish} className="formTodo">
      <Row justify="space-between">
        <Col span={17}>
          <Form.Item name="value">
            <Input
              onChange={(e) => setValue(e.target.value)}
              placeholder="Complete your todoist."
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item>
            <Button onClick={onMemo} type="primary">
              Add Memo
            </Button>
            <Button htmlType="submit" className="inputTodo_button">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
      {displayMemo ? (
        <Row>
          <Col span={17}>
            <Form.Item name="memo">
              <Input.TextArea
                className="memoTodo"
                onChange={(e) => setMemo(e.target.value)}
                placeholder="Add description about yout todo content."
                autoSize={{ minRows: 5, maxRows: 30 }}
              />
            </Form.Item>
          </Col>
        </Row>
      ) : null}
    </Form>
  );
};

export default TodoInsert;
