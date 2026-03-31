import AddTask from "../Button/AddTask";

export default function AddTaskForm({addTask , text , setText}) {
    return <form onSubmit={addTask}>
        <input type="text" placeholder="add Task" value={text} onChange={(e) => {setText(e.target.value)}}/>
        <AddTask />
    </form>
}