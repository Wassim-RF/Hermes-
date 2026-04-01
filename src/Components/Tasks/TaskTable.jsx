import Filter from "../Filter/Filter";
import OneTask from "./OneTask";

export default function TaskTable({ todos, deleteTask, toogleTask , filter , setFilter }) {
    return (
        <div className="w-full space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-4 bg-white/40 rounded-2xl">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Total</span>
                        <span className="bg-white px-2 py-0.5 rounded-full text-xs font-black text-slate-700 shadow-sm">
                            {todos.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Done</span>
                        <span className="bg-white px-2 py-0.5 rounded-full text-xs font-black text-emerald-700 shadow-sm">
                            {todos.filter(todo => todo.completed).length}
                        </span>
                    </div>
                </div>
                <div className="shrink-0">
                    <Filter setFilter={setFilter} filter={filter} />
                </div>
            </div>

            <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 w-16 text-center">
                                Id
                            </th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Task Description
                            </th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-center">
                                Priority
                            </th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-50">
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
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-12 text-center text-slate-400 italic">
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