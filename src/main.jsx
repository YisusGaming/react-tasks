import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import TaskContextProvider from "./context/TaskContext";

const app = ReactDom.createRoot(document.getElementById("root"));
app.render(
    <React.StrictMode>
        <TaskContextProvider>
            <App />
        </TaskContextProvider>
    </React.StrictMode>
);
