import TodoCard from "./TodoCard";
import {Todo} from "../model/Todo";


type DoneTodosProps = {
    todos: Todo[];
}

export default function DoneTodos ({todos}: DoneTodosProps){
    return <div>
        {todos.map(todo => <TodoCard key={todo.id} todo={todo}/>)}
    </div>;
}