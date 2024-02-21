import React, {
  useState,
  useRef,
  useEffect,
  useReducer,
  useContext,
} from "react";
import "./css/App.css";
import Editor from "./components/Editor";
import { Todo } from "./Types";
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./bootstrap/Navbar";
// import { text } from "stream/consumers";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
        completed: boolean;
      };
    }
  | { type: "DELETE"; id: number; completed: boolean }
  | {
      type: "DONE";
      data: {
        id: number;
        content: string;
        completed: boolean;
      };
    };

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((it) => it.id !== action.id);
    default:
      return state;
  }
}

function CompletedReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "DONE":
      return [...state, action.data]; // 완료된 일 목록에 새로운 Todo 추가
    case "DELETE":
      return state.filter((it) => it.id !== action.id);
    default:
      return state;
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
  onClickDone: (text: string) => void;
} | null>(null);
export const CompletedStateContext = React.createContext<Todo[] | null>(null);
export const CompletedDispatchContext = React.createContext<{
  onClickCDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext); //useContext로 TodoDispatchContext 전달
  if (!dispatch) throw new Error("TodoDispatchContext에 오류 발생");
  return dispatch;
}

export function useCompletedDispatch() {
  const dispatch = useContext(CompletedDispatchContext);
  if (!dispatch) throw new Error("CompletedDispatchContext에 오류 발생");
  return dispatch;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [completedTodos, completedDispatch] = useReducer(CompletedReducer, []);

  const idRef = useRef(0);
  const DidRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
        completed: false,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
      completed: false,
    });
  };

  const onClickDone = (text: string) => {
    completedDispatch({
      type: "DONE",
      data: {
        id: DidRef.current++,
        content: text,
        completed: true,
      },
    });
  };
  const onClickCDelete = (id: number) => {
    completedDispatch({
      type: "DELETE",
      id: id,
      completed: true,
    });
  };

  useEffect(() => {
    console.log(todos);
    console.log(completedTodos);
  }, [todos, completedTodos]);

  return (
    <div className="App">
      <Navbar />
      <h1 className="Title">Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <CompletedStateContext.Provider value={completedTodos}>
          <TodoDispatchContext.Provider
            value={{
              onClickAdd,
              onClickDelete,
              onClickDone,
            }}
          >
            <CompletedDispatchContext.Provider value={{ onClickCDelete }}>
              <Editor />
              <div className="Todo-Item">
                <h3>해야할 일</h3>
                <hr className="hr" />
                <div className="Item-container">
                  {todos.map((todo) => (
                    <div className="TodoItem" key={todo.id}>
                      <TodoItem {...todo} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="Done-Item">
                <h3>완료한 일</h3>
                <hr className="hr" />
                <div className="Item-container">
                  {completedTodos.map((todo) => (
                    <div className="TodoItem" key={todo.id}>
                      <TodoItem {...todo} />
                    </div>
                  ))}
                </div>
              </div>
            </CompletedDispatchContext.Provider>
          </TodoDispatchContext.Provider>
        </CompletedStateContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
