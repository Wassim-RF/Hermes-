import DeleteTask from "../Button/DeleteTask";
import ToogleTask from "../Button/ToggleTask";

export default function OneTask({index , task , deleteTask}) {
    return <tr>
        <td>{index}</td>
        <td className="{{ task.completed ?  'line-through' : ''}}">{task.text}</td>
        <td>
            <DeleteTask deleteTask={deleteTask} id={task.id} />
            <ToogleTask />
        </td>
    </tr>
}