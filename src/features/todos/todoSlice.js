import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = { id: uuid(), title: action.payload, completed: false };
      state.push(newTodo);
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    markCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = true;
    },
    markNotCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = false;
    },
  },
});

export const { add, markCompleted, markNotCompleted, remove } =
  todoSlice.actions;

export default todoSlice.reducer;
