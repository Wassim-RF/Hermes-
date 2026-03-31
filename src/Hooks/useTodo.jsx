import { useEffect, useState } from "react";

export default function useTodo() {
    const [todos , setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");

        if (storedTodos) {
            setTimeout(() => setTodos(JSON.parse(storedTodos)), 0);
        }
    } , []);

    useEffect(() => {
        localStorage.setItem("todos" , JSON.stringify(todos));
    } , [todos]);

    function addTodo(text) {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTodos([...todos , newTodo]);
    }

    function deleteTodo(id) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        );
    }

    function toogleTodo(id) {
        setTodos(
            todos.map(todo => 
                todo.id === id ?
                {...todo , completed: !todo.completed}
                : todo
            )
        );
    }

    return {todos , addTodo , deleteTodo , toogleTodo}
}