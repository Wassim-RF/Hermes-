import AddTask from "../Button/AddTask";

export default function AddTaskForm({ addTask, text, setText , setPriority , priority }) {
    return (
        <form 
            onSubmit={addTask} 
            className="group relative flex items-center w-full max-w-3xl mx-auto p-1.5 bg-white rounded-2xl shadow-2xl shadow-indigo-100/50 border border-slate-200/60 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all duration-300"
        >
            <div className="grow pl-3">
                <input 
                    type="text" 
                    placeholder="What's your next mission?" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    className="w-full py-3 bg-transparent border-none text-slate-700 placeholder:text-slate-400 focus:outline-none text-base font-medium"
                />
            </div>

            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            <div className="relative flex items-center px-2 group/select">
                <select 
                    name="priority"
                    className="appearance-none bg-slate-50/50 hover:bg-slate-100 px-3 py-2 pr-8 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 cursor-pointer outline-none transition-all border border-transparent hover:border-slate-200"
                    value={priority} onChange={(e) => (setPriority(e.currentTarget.value))}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <div className="absolute right-5 pointer-events-none text-slate-400 group-hover/select:text-indigo-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
            </div>

            <div className="shrink-0 ml-1">
                <AddTask />
            </div>
        </form>
    );
}