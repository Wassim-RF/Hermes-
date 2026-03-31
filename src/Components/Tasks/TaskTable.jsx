import OneTask from "./OneTask";

export default function TaskTable({ todos, deleteTask, toogleTask }) {
    return (
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
                        <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-50">
                    {todos.length > 0 ? (
                        todos.map((todo, index) => (
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
                            <td colSpan="3" className="py-12 text-center text-slate-400 italic">
                                No tasks found. Start by adding one above!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}