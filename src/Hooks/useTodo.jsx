import { useState } from "react";

export default function useTodo() {
    const [todos , setTodos] = useState([]);

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
}