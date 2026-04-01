import { useState } from "react";
import { useTodo } from "./Hooks/useTodo";
import AddTaskForm from "./Components/Tasks/AddTaskForm";
import TaskTable from "./Components/Tasks/TaskTable";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";

function App() {
    const [todos, addTodo, deleteTodo, toogleTodo] = useTodo();
    const [text, setText] = useState("");
    const [priority , setPriority] = useState("");
    const [filter , setFilter] = useState("All");

    function handleSubmitAdd(e) {
        e.preventDefault();
        if (text.trim() === "") {
            alert("L'input est vide.");
            return
        }
        addTodo(text , priority);
        setText("");
    }

    return (
        <div className="min-h-screen bg-slate-50/50 flex flex-col">
            <Header />

            <main className="grow pt-32 pb-12 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="flex justify-center animate-in fade-in slide-in-from-top-4 duration-500">
                        <AddTaskForm addTask={handleSubmitAdd} text={text} setText={setText} setPriority={setPriority} priority={priority}/>
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                            <TaskTable todos={todos} deleteTask={deleteTodo} toogleTask={toogleTodo} filter={filter} setFilter={setFilter} />
                        </div>
                    </section>
                </div>
            </main>

            <Footer todos={todos} />
        </div>
    );
}

export default App;