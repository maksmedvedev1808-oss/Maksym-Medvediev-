import { useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { addTask } = useContext(TaskContext);

  const inputRef = useRef();

  const handleAdd = () => {
    const value = inputRef.current.value;

    if (value !== "") {
      addTask(value);

      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введіть задачу"
        ref={inputRef}
      />

      <button onClick={handleAdd}>
        Додати
      </button>
    </div>
  );
}

export default TaskForm;