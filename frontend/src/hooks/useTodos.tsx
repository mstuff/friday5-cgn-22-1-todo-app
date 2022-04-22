import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import {getTodosByApi} from "../service/TodoApiService";
import {To} from "react-router-dom";


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