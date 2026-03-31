import OneTask from "./OneTask";

export default function TaskTable({ todos , deleteTask , toogleTask }) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {todos.map((index , todo) => (
                    <OneTask index={index} task={todo} deleteTask={deleteTask} toogleTask={toogleTask} />
                ))}
            </tbody>
        </table>
    );
}