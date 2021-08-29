import React from "react";
import { useSelector } from "react-redux";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Actions from "./Actions";

const App = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="wrapper">
      <h1 className="logo">ToDo List w/ Redux Toolkit</h1>
      <TodoForm />
      <TodoList todos={todos} />
      <Actions />
    </div>
  );
};

export default App;
