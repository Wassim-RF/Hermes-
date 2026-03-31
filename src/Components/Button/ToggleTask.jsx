export default function ToogleTask({isCompleted , toogleTask , id}) {
    return <button onClick={() => toogleTask(id)}>
        {
            isCompleted ? "Incomplete" : "Complete"
        }
    </button>
}