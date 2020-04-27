import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'modules/todos';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    dispatch(addTodo(value));
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Complete your todoist."
        value={value}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoInsert;
