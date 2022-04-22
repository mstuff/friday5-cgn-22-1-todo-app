import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import {getTodosByApi} from "../service/TodoApiService";



export default function useTodos(){
    const [todos, setTodos] = useState<Todo []>([]);

    useEffect(() => {
        getTodosByApi()
            .then(data => setTodos(data));
    }, [])

    const addTodo = (newTodo: Todo) => {
        setTodos((allTodos) => [...allTodos, newTodo])
    }


    return {todos, addTodo};


}


// Weitere Möglichkeit, eine Eigenschaft wegzulassen: Omit<Todo, "id">
// funktioniert hier nicht mit dem Todo [] im useState