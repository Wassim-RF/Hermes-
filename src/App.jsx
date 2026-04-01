import { useState } from "react";
import { useTodo } from "./Hooks/useTodo";
import AddTaskForm from "./Components/Tasks/AddTaskForm";
import TaskTable from "./Components/Tasks/TaskTable";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";

function App() {
    const [mode , setMode] = useState("light");
    const [todos, addTodo, deleteTodo, toogleTodo] = useTodo();
    const [text, setText] = useState("");
    const [priority , setPriority] = useState("");
    const [filter , setFilter] = useState("All");
    const [deadline , setDeadline] = useState("");

    function handleSubmitAdd(e) {
        e.preventDefault();
        if (text.trim() === "") {
            alert("L'input est vide.");
            return
        }
        if (priority.trim() === "") {
            alert("Choisir une priorite");
            return
        }
        addTodo(text , priority , deadline);
        setText("");
    }

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
            mode === 'dark' ? "bg-slate-950 text-slate-200" : "bg-slate-50 text-slate-900"
        }`}>
            <Header mode={mode} setMode={setMode}/>

            <main className="grow pt-32 pb-12 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto space-y-12">

                    <section className="flex justify-center animate-in fade-in slide-in-from-top-4 duration-500">
                        <AddTaskForm 
                            addTask={handleSubmitAdd} 
                            text={text} 
                            setText={setText} 
                            setPriority={setPriority} 
                            priority={priority} 
                            setDeadline={setDeadline} 
                            deadline={deadline} 
                            mode={mode}
                        />
                    </section>

                    <section className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
                        <div className={`rounded-3xl shadow-2xl overflow-hidden border transition-all duration-500 ${
                            mode === 'dark' 
                            ? "bg-slate-900/50 border-slate-800 shadow-black/40" 
                            : "bg-white border-slate-100 shadow-slate-200/50"
                        }`}>
                            <TaskTable 
                                todos={todos} 
                                deleteTask={deleteTodo} 
                                toogleTask={toogleTodo} 
                                filter={filter} 
                                setFilter={setFilter} 
                                mode={mode}
                            />
                        </div>
                    </section>
                </div>
            </main>

            <Footer mode={mode} />
        </div>
    );
}

export default App;