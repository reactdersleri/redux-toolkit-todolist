import classNames from "classnames";
import { useDispatch } from "react-redux";
import {
  markCompleted,
  markNotCompleted,
  remove,
} from "./features/todos/todoSlice";
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";

const itemClassNames = (completed) =>
  classNames("item", {
    completed: completed,
  });

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();

  const toggleCompleted = (id, completed) => {
    if (completed) dispatch(markNotCompleted(id));
    else dispatch(markCompleted(id));
  };

  const onDeleteTodo = (e, id) => {
    e.stopPropagation();
    dispatch(remove(id));
  };

  if (!todos.length)
    return <p>Please add items to your list using the form above.</p>;

  return (
    <ul className="list">
      {todos.map((todo) => {
        const { id, title, completed } = todo;

        return (
          <li
            key={id}
            className={itemClassNames(completed)}
            onClick={() => toggleCompleted(id, completed)}
          >
            {completed ? (
              <RiCheckboxCircleFill size="24" color="green" />
            ) : (
              <RiCheckboxBlankCircleLine size="24" color="gray" />
            )}
            <span>{title}</span>
            <FiTrash2
              color="red"
              size="16"
              onClick={(e) => onDeleteTodo(e, id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
