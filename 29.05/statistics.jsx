import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Statistics() {
  const { tasks } = useContext(TaskContext);

  const completed = tasks.filter(
    task => task.completed
  ).length;

  return (
    <div>
      <p>Всього задач: {tasks.length}</p>
      <p>Виконаних: {completed}</p>
      <p>Невиконаних: {tasks.length - completed}</p>
    </div>
  );
}

export default Statistics;