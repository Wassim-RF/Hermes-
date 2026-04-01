import { useEffect, useState } from "react";

export function useTodo() {
    const [todos , setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos" , JSON.stringify(todos));
    } , [todos]);

    function addTodo(text , priority) {
        const newTodo = {
            id: Date.now(),
            text,
            priority,
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

    return [todos , addTodo , deleteTodo , toogleTodo]
}