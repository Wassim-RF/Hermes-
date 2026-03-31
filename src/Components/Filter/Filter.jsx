export default function Filter({setFilter}) {
    return <div>
        <button onClick={setFilter("All")}>All</button>
        <button onClick={setFilter("Complete")}>Complete</button>
        <button onClick={setFilter("Incomplete")}>Incomplete</button>
    </div>
}