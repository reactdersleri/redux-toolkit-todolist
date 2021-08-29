import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./features/todos/todoSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  };

  return (
    <div>
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default TodoForm;
