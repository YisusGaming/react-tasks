import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import taskForm from "./css/taskForm.css";

export default function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { CreateTask } = useContext(TaskContext);

    
    function Submit(event) {
        event.preventDefault();
        const task = {
            title,
            desc: description
        }
        CreateTask(task);
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={Submit} className="form">
            <h1>Crear una Tarea</h1>

            <div className="form-group">
                <input onChange={(event) => { setTitle(event.target.value); }} type="text" required placeholder="Título de la tarea" value={title} />
                {/* <input onChange={(event) => { setDescription(event.target.value) }} type="text" required placeholder="Descripción de la tarea" /> */}
                <textarea onChange={(event) => { setDescription(event.target.value) }} required placeholder="Descripción de la tarea" cols="30" rows="5" value={description}></textarea>
            </div>
            <button type="submit">Crear Tarea</button>
        </form>
    );
}