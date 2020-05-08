const ADD_TODO = 'todos/ADD_TODO' as const;
const TOOGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
const MODIFY_TODO = 'todos/MODIFY_TODO' as const;

////////////////////////////
///        Type          ///
////////////////////////////
export type Todo = {
  id: number;
  text: string;
  memo: string;
  done: boolean;
  date: number;
};
type TodosState = Todo[];

////////////////////////////
///    InitialState      ///
////////////////////////////
const initialState: TodosState = [
  { id: 1, text: 'coco project', done: false, date: 0, memo: 'fake data' },
  {
    id: 2,
    text: 'todolist 초기 세팅',
    done: true,
    date: 0,
    memo:
      'fake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake datafake data',
  },
  { id: 3, text: 'Drink water', done: true, date: 0, memo: 'fake data' },
];

////////////////////////////
///       Actions        ///
////////////////////////////
export const addTodo = (text: string, memo: string) => ({
  type: ADD_TODO,
  payload: { text, memo },
});
export const toggleTodo = (id: number) => ({
  type: TOOGLE_TODO,
  payload: id,
});
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});
export const modifyTodo = (text: string, memo: string, id: number) => ({
  type: MODIFY_TODO,
  payload: { text, memo, id },
});

/// Actions의 ts type 준비
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof modifyTodo>;

////////////////////////////
///       Reducer        ///
////////////////////////////
const todos = (
  state: TodosState = initialState,
  action: TodosAction,
): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      const now = Date.now();
      return state.concat({
        id: nextId,
        text: action.payload.text,
        memo: action.payload.memo,
        done: false,
        date: now,
      });
    case TOOGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case MODIFY_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text, memo: action.payload.memo }
          : todo,
      );
    default:
      return state;
  }
};

export default todos;
