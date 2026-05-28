import { useState, useEffect } from 'react';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {

        const newTask = {
            id: Date.now(),
            title: title,
            completed: false
        };

        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id) => {

        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id) => {

        setTasks(tasks.filter((task) => task.id !== id));
    };

    useEffect(() => {
        console.log('Кількість задач:', tasks.length);
    }, [tasks]);

    return (
        <div>

            <Header />

            <TaskForm addTask={addTask} />

            <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
            />

        </div>
    );
}

export default App;