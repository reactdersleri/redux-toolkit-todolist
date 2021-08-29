import React from "react";
import { useSelector } from "react-redux";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <React.Fragment>
      <h1>Redux Toolkit ile Yapılacaklar Listesi</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </React.Fragment>
  );
};

export default App;
