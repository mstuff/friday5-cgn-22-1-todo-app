import axios from "axios";
import {Todo} from "../model/Todo";


export function getTodosByApi(){
    return axios.get("/api/todo")
        .then(response => response.data )
        .catch(console.error)
}

export function postTodosByApi(todo: Todo){
    return axios.post("api/todo", todo)
        .then(response => response.data)
        .catch(console.error)

}