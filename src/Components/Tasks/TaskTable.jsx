import Filter from "../Filter/Filter";
import OneTask from "./OneTask";

export default function TaskTable({ todos, deleteTask, toogleTask , filter , setFilter , mode }) {
    return (
        <div className="w-full space-y-4">
            <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                mode === 'dark' ? "bg-slate-900/40 border border-slate-800" : "bg-white/40 border border-slate-200/60"
            }`}>
                <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm transition-colors ${
                        mode === 'dark' ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200/60"
                    }`}>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                            mode === 'dark' ? "text-slate-400" : "text-slate-500"
                        }`}>Total</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-black shadow-sm ${
                            mode === 'dark' ? "bg-slate-900 text-slate-200" : "bg-white text-slate-700"
                        }`}>
                            {todos.length}
                        </span>
                    </div>

                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm transition-colors ${
                        mode === 'dark' ? "bg-emerald-950/20 border-emerald-900/30" : "bg-emerald-50 border-emerald-100"
                    }`}>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                            mode === 'dark' ? "text-emerald-500" : "text-emerald-600"
                        }`}>Done</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-black shadow-sm ${
                            mode === 'dark' ? "bg-emerald-900/40 text-emerald-200" : "bg-white text-emerald-700"
                        }`}>
                            {todos.filter(todo => todo.completed).length}
                        </span>
                    </div>
                </div>

                <div className="shrink-0">
                    <Filter setFilter={setFilter} filter={filter} mode={mode} />
                </div>
            </div>

            <div className={`w-full overflow-hidden rounded-2xl border transition-all duration-300 shadow-sm ${
                mode === 'dark' ? "bg-slate-950 border-slate-800 shadow-black/40" : "bg-white border-slate-200 shadow-sm"
            }`}>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className={`border-b transition-colors ${
                            mode === 'dark' ? "bg-slate-900/50 border-slate-800" : "bg-slate-50/50 border-slate-100"
                        }`}>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 w-16 text-center">
                                Id
                            </th>
                            <th className={`py-4 px-4 text-xs font-semibold uppercase tracking-wider transition-colors ${
                                mode === 'dark' ? "text-slate-400" : "text-slate-500"
                            }`}>
                                Task Description
                            </th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-center">
                                Priority
                            </th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-center">
                                Deadline
                            </th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className={`divide-y ${mode === 'dark' ? "divide-slate-800" : "divide-slate-50"}`}>
                        {todos.length > 0 ? (
                            (filter === "All"
                                ? todos
                                : filter === "Complete"
                                ? todos.filter((todo) => todo.completed)
                                : todos.filter((todo) => !todo.completed)
                            ).map((todo, index) => (
                                <OneTask 
                                    key={todo.id} 
                                    index={index} 
                                    task={todo} 
                                    deleteTask={deleteTask} 
                                    toogleTask={toogleTask} 
                                    mode={mode}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className={`py-12 text-center italic transition-colors ${
                                    mode === 'dark' ? "text-slate-600" : "text-slate-400"
                                }`}>
                                    No tasks found. Start by adding one above!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}