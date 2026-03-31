import DeleteTask from "../Button/DeleteTask";
import ToogleTask from "../Button/ToggleTask";

export default function OneTask({ index, task, deleteTask, toogleTask }) {
  return (
    <tr className="group border-b border-slate-100 last:border-none hover:bg-slate-50/80 transition-colors duration-150">
      {/* Index Column */}
      <td className="py-4 px-3 text-sm font-medium text-slate-400 w-12 text-center">
        {index + 1}
      </td>

      {/* Task Text Column */}
      <td className="py-4 px-3">
        <span
          className={`text-base transition-all duration-300 ${
            task.completed 
              ? "line-through text-slate-400 decoration-slate-300" 
              : "text-slate-700 font-normal"
          }`}
        >
          {task.text}
        </span>
      </td>

      {/* Actions Column */}
      <td className="py-4 px-3 text-right">
        <div className="flex items-center justify-end gap-3">
          <ToogleTask isCompleted={task.completed} toogleTask={toogleTask} id={task.id} />
          <DeleteTask deleteTask={deleteTask} id={task.id} />
        </div>
      </td>
    </tr>
  );
}