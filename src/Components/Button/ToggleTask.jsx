export default function AddTask({isCompleted}) {
    return <button>
        {
            isCompleted ? "Incomplete" : "Complete"
        }
    </button>
}