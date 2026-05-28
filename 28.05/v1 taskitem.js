function TaskItem({ task, toggleTask, deleteTask }) {

    return (
        <div>

            <span>
                {task.completed ? '✅ ' : '❌ '}
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