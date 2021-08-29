import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./features/todos/todoSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onSave = () => {
    if (title) {
      dispatch(add(title));
      setTitle("");
    } else {
      alert("You must enter a title for your todo");
    }
  };

  return (
    <div className="form">
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <button onClick={onSave}>Add</button>
    </div>
  );
};

export default TodoForm;
