import { createContext, useState, useEffect } from "react";
import TaskData from "../data/tasks";

export const TaskContext = createContext();
export default function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(TaskData);
    }, []);

    function CreateTask(task) {
        setTasks([...tasks, {
            id: tasks.length,
            title: task.title,
            desc: task.desc
        }]);
    }

    function DeleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id != taskId));
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            CreateTask: CreateTask,
            deleteTask: DeleteTask
        }} >
            {props.children}
        </TaskContext.Provider>
    );
}