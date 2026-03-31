export default function DeleteTask({deleteTask , id}) {
    return <button onClick={() => deleteTask(id)} className="text-red-500 hover:text-white hover:bg-red-500 border border-transparent hover:border-red-600 px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1">
        Delete
    </button>
}