import OpenTodos from "../components/OpenTodos";
import {Todo} from "../model/Todo";
import {useEffect, useState} from "react";
import {getTodosByApi} from "../service/TodoApiService";


type TodoOverviewPageProps = {
    todos: Todo [];


}

export default function TodoOverviewPage(){

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect( ()=> {
        getTodosByApi()
            .then(data => setTodos(data));
    })
}