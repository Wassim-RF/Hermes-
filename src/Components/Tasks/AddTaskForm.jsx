import AddTask from "../Button/AddTask";

export default function AddTaskForm({addTask}) {
    return <form onSubmit={addTask}>
        <input type="text" placeholder="add Task"/>
        <AddTask />
    </form>
}