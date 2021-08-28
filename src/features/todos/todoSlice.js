import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = [
  {
    id: uuid(),
    title: "Sample to do",
    completed: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
    },
    markTodoCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = true;
    },
    markTodoNotCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = false;
    },
  },
});

export const { addTodo, markTodoCompleted, markTodoNotCompleted, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
