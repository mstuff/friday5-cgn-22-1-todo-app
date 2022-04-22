import {Todo} from "../model/Todo";


type TodoCardProps = {
    todo: Todo;
}

export default function TodoCard({todo}:TodoCardProps){
    return <div>
        <div>{todo.id}</div>
        <div>{todo.description}</div>
        <div>{todo.status}</div>
    </div>

}