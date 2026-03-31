export default function DeleteTask({deleteTask , id}) {
    return <button onClick={() => deleteTask(id)}>
        Delete
    </button>
}