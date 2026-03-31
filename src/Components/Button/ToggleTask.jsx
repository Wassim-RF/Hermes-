export default function ToogleTask({isCompleted}) {
    return <button>
        {
            isCompleted ? "Incomplete" : "Complete"
        }
    </button>
}