import TaskList from "./components/TaskList";
import Main from "./components/css/main.css";
import TaskForm from "./components/TaskForm";
import Advice from "./components/Advice";

export default function App() {

    return (
        <div className="main-center">
            <TaskList />
            <TaskForm />
            <Advice />
        </div>
    );
}
