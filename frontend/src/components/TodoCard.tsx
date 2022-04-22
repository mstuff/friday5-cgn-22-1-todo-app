import {Todo} from "../model/Todo";
import "./TodoCard.css"


type TodoCardProps = {
    todo: Todo;
}

export default function TodoCard({todo}: TodoCardProps) {
    return <div className={"todo-card"}>
        <div className={"card"}>Discription: {todo.description}</div>
        <div className={"card"}>Status: {todo.status}</div>
        <div>
        <button className={"button-advance"}> Advance </button>
        </div>
    </div>

}