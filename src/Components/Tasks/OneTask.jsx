import DeleteTask from "../Button/DeleteTask";
import ToogleTask from "../Button/ToggleTask";

export default function OneTask({ index, task, deleteTask, toogleTask , mode}) {
  return (
    <tr className={`group border-b transition-colors duration-150 ${
        mode === 'dark' ? "border-slate-800 hover:bg-slate-900/50" : "border-slate-100 hover:bg-slate-50/80"}`
    }>
      <td className={`py-4 px-3 text-sm font-medium w-12 text-center transition-colors ${
          mode === 'dark' ? "text-slate-600" : "text-slate-400"
      }`}>
          {index + 1}
      </td>

      <td className="py-4 px-3">
          <span
              className={`text-base transition-all duration-300 ${
                  task.completed 
                      ? (mode === 'dark' ? "line-through text-slate-600 decoration-slate-700" : "line-through text-slate-400 decoration-slate-300")
                      : (mode === 'dark' ? "text-slate-200 font-medium" : "text-slate-700 font-medium")
              }`}
          >
              {task.text}
          </span>
      </td>

      <td className="py-4 px-3">
          <div className="flex items-center justify-center">
              <span className={`
                  px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all
                  ${task.priority === 'high' 
                      ? (mode === 'dark' ? 'bg-rose-950/30 text-rose-400 border-rose-900/50' : 'bg-rose-50 text-rose-600 border-rose-100') : 
                    task.priority === 'medium' 
                      ? (mode === 'dark' ? 'bg-amber-950/30 text-amber-400 border-amber-900/50' : 'bg-amber-50 text-amber-600 border-amber-100') : 
                    (mode === 'dark' ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-slate-50 text-slate-500 border-slate-100')}
              `}>
                  {task.priority || 'low'}
              </span>
          </div>
      </td>

      <td className="py-4 px-3">
          <div className={`flex items-center justify-center gap-2 font-bold uppercase tracking-tighter text-[10px] transition-colors ${
              mode === 'dark' ? "text-slate-500" : "text-slate-400"
          }`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                  className={mode === 'dark' ? "text-slate-600" : "text-slate-300"}>
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>
                  {task.deadline ? task.deadline : "No Date"}
              </span>
          </div>
      </td>

      <td className="py-4 px-3 text-right">
          <div className="flex items-center justify-end gap-3">
              <ToogleTask isCompleted={task.completed} toogleTask={toogleTask} id={task.id} mode={mode} />
              <DeleteTask deleteTask={deleteTask} id={task.id} mode={mode} />
          </div>
      </td>
    </tr>
  );
}