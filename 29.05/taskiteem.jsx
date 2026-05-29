import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <span
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none"
        }}
      >
        {task.title}
      </span>

      <button onClick={() => toggleTask(task.id)}>
        Виконано
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Видалити
      </button>
    </div>
  );
}

export default TaskItem;