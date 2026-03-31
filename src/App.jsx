import { useState } from "react";
import { useTodo } from "./Hooks/useTodo";
import AddTaskForm from "./Components/Tasks/AddTaskForm";
import TaskTable from "./Components/Tasks/TaskTable";
import Header from "./Components/Layouts/Header";

function App() {
    const [todos, addTodo, deleteTodo, toogleTodo] = useTodo();
    const [text, setText] = useState("");

    function handleSubmitAdd(e) {
        e.preventDefault();
        if (text.trim() === "") {
            alert("L'input est vide.");
            return
        }
        addTodo(text);
        setText("");
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50/30 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto space-y-10">

                <Header />

                <main>
                    <section className="flex justify-center">
                        <AddTaskForm 
                            addTask={handleSubmitAdd} 
                            text={text} 
                            setText={setText} 
                        />
                    </section>

                    <main className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <TaskTable 
                            todos={todos} 
                            deleteTask={deleteTodo} 
                            toogleTask={toogleTodo} 
                        />
                    </main>
                </main>

                {/* <footer className="pt-6 border-t border-slate-200 flex justify-between items-center text-sm text-slate-400">
                    <p>{todos.length} Total Tasks</p>
                    <p>Built with React & Tailwind</p>
                </footer> */}

            </div>
        </div>
    );
}

export default App;