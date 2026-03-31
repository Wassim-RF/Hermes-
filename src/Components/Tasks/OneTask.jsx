import DeleteTask from "../Button/DeleteTask";
import ToogleTask from "../Button/ToggleTask";

export default function OneTask({index , task}) {
    return <tr>
        <td>{index}</td>
        <td className="{{ task.completed ?  'line-through' : ''}}">{task.text}</td>
        <td>
            <DeleteTask />
            <ToogleTask />
        </td>
    </tr>
}