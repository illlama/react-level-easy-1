const ADD_TODO = 'todos/ADD_TODO' as const;

////////////////////////////
///        Type          ///
////////////////////////////
export type Todo = {
  id: number;
  text: string;
  done: boolean;
  date: number;
};
type TodosState = Todo[];

////////////////////////////
///    InitialState      ///
////////////////////////////
const initialState: TodosState = [
  { id: 1, text: 'coco project', done: false, date: 0 },
  { id: 2, text: 'todolist 초기 세팅', done: true, date: 0 },
  { id: 3, text: 'Drink water', done: true, date: 0 },
];

////////////////////////////
///       Actions        ///
////////////////////////////
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

/// Actions의 ts type 준비
type TodosAction = ReturnType<typeof addTodo>;

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
        text: action.payload,
        done: false,
        date: now,
      });
    default:
      return state;
  }
};

export default todos;
