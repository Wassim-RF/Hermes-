import AddTask from "../Button/AddTask";

export default function AddTaskForm({ addTask, text, setText }) {
    return (
        <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="relative grow">
                <input type="text" placeholder="What needs to be done?" value={text} onChange={(e) => setText(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border-none rounded-xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-200 outline-none shadow-inner"/>
            </div>
            <div className="flex shrink-0">
                <AddTask />
            </div>
        </form>
    );
}