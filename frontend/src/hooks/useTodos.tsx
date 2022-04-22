import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import {getTodosByApi} from "../service/TodoApiService";


export default function useTodos(){
    const [todos, setTodos] = useState<Todo []>([]);

    useEffect(() => {
        getTodosByApi()
            .then(data => setTodos(data));
    }, [])


    return {todos};


}