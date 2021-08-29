import React from "react";
import { useDispatch } from "react-redux";
import { deleteCompleted, markAllCompleted } from "./features/todos/todoSlice";

function Actions() {
  const dispatch = useDispatch();

  return (
    <div className="actions">
      <button onClick={() => dispatch(markAllCompleted())}>
        Mark All Items Completed
      </button>
      <button onClick={() => dispatch(deleteCompleted())}>
        Delete Completed Items
      </button>
    </div>
  );
}

export default Actions;
