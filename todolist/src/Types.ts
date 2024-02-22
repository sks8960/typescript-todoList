export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DONE_TODO = "DONE_TODO";
export const DELETE_COMPLETED_TODO = "DELETE_COMPLETED_TODO";

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  completedTodos: Todo[];
}

export interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: Todo;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

export interface DoneTodoAction {
  type: typeof DONE_TODO;
  payload: Todo;
}

export interface DeleteCompletedTodoAction {
  type: typeof DELETE_COMPLETED_TODO;
  payload: number;
}

export type TodoActionTypes =
  | CreateTodoAction
  | DeleteTodoAction
  | DoneTodoAction
  | DeleteCompletedTodoAction;
