import taskList from "./css/taskList.css";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {

    const { tasks, deleteTask } = useContext(TaskContext);

    if (tasks.length == 0) {
        return <h1 id="no-tasks">No hay tareas guardadas.</h1>;
    }

    return (
        <div className="tasklist">
            {tasks.map((task) => {
                return (
                    <div className="task" key={task.id}>
                        <h2>{task.title}</h2>
                        <p>{task.desc}</p>
                        <button onClick={(event) => {deleteTask(task.id)}} >Eliminar</button>
                    </div>
                );
            })}
        </div>
    );
}
