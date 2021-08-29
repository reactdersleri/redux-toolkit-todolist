import { useDispatch } from "react-redux";
import {
  markCompleted,
  markNotCompleted,
  remove,
} from "./features/todos/todoSlice";

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();

  const toggleCompleted = (id, completed) =>
    completed ? dispatch(markNotCompleted(id)) : dispatch(markCompleted(id));

  const onDeleteTodo = (id) => {
    console.log({ id });
    dispatch(remove(id));
  };

  return (
    <ul>
      {todos.map((todo) => {
        const { id, title, completed } = todo;

        return (
          <li key={id}>
            <button onClick={() => onDeleteTodo(id)}>X</button>
            <span
              onClick={() => toggleCompleted(id, completed)}
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
