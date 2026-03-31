export default function ToogleTask({isCompleted , toogleTask , id}) {
    return <button onClick={() => toogleTask(id)} className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border-2 ${ isCompleted ? "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200" : "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200"} focus:outline-none focus:ring-2 focus:ring-offset-2 ${ isCompleted ? "focus:ring-amber-400" : "focus:ring-emerald-400"}`}>
        {
            isCompleted ? "Incomplete" : "Complete"
        }
    </button>
}