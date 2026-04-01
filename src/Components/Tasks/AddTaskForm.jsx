import AddTask from "../Button/AddTask";

export default function AddTaskForm({ addTask, text, setText , setPriority , priority, setDeadline , deadline , mode }) {
    return (
        <form 
            onSubmit={addTask} 
            className={`group relative flex items-center w-full max-w-4xl mx-auto p-1.5 rounded-2xl border transition-all duration-300 ${
                mode === 'dark' 
                ? "bg-slate-900 border-slate-800 shadow-2xl shadow-black/40 focus-within:ring-indigo-500/30 focus-within:border-indigo-500" 
                : "bg-white border-slate-200/60 shadow-2xl shadow-indigo-100/50 focus-within:ring-indigo-500/20 focus-within:border-indigo-500"
            }`}
        >
            <div className="grow pl-3">
                <input 
                    type="text" 
                    placeholder="What's your next mission?" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    className={`w-full py-3 bg-transparent border-none focus:outline-none text-base font-medium transition-colors ${
                        mode === 'dark' ? "text-slate-200 placeholder:text-slate-600" : "text-slate-700 placeholder:text-slate-400"
                    }`}
                />
            </div>

            <div className={`h-6 w-px mx-2 transition-colors ${mode === 'dark' ? "bg-slate-800" : "bg-slate-200"}`}></div>

            <div className="relative flex items-center px-2 group/select">
                <select 
                    name="priority"
                    className={`appearance-none px-3 py-2 pr-8 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-pointer outline-none transition-all border border-transparent ${
                        mode === 'dark' 
                        ? "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:border-slate-700" 
                        : "bg-slate-50/50 text-slate-500 hover:bg-slate-100 hover:border-slate-200"
                    }`}
                    value={priority} 
                    onChange={(e) => setPriority(e.currentTarget.value)}
                >
                    <option value="" disabled>Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <div className="absolute right-5 pointer-events-none text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
            </div>

            <div className="relative flex items-center px-1 group/date">
                <input 
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className={`appearance-none pl-3 pr-8 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-pointer outline-none transition-all border border-transparent ${
                        mode === 'dark' 
                        ? "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:border-slate-700 focus:bg-slate-800" 
                        : "bg-slate-50/50 text-slate-500 hover:bg-slate-100 hover:border-slate-200 focus:bg-white"
                    }`}
                />
                <div className="absolute right-4 pointer-events-none text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
            </div>

            <div className="shrink-0 ml-1">
                <AddTask mode={mode} />
            </div>
        </form>
    );
}