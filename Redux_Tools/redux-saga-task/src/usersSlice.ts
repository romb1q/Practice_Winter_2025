import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodosRequest: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      state.loading = false;
    },
    fetchTodosFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } = todosSlice.actions;
export default todosSlice.reducer;
