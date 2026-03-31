import { useState } from "react";
import { useTodo } from "./Hooks/useTodo";
import AddTaskForm from "./Components/Tasks/AddTaskForm";
import TaskTable from "./Components/Tasks/TaskTable";

function App() {
    const [todos , addTodo , deleteTodo , toogleTodo] = useTodo();
    const [text , setText] = useState("");

    return (
        <div>
            <AddTaskForm addTask={addTodo} text={text} setText={setText} />
            <TaskTable todos={todos} deleteTask={deleteTodo} toogleTask={toogleTodo} />
        </div>
    )
}

export default App