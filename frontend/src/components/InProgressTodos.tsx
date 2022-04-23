import TodoCard from "./TodoCard";
import {Todo} from "../model/Todo";


type InProgressTodosProps = {
    todos: Todo[];
}

export default function InProgressTodos ({todos}: InProgressTodosProps){
    return <div>
        {todos.map(todo => <TodoCard key={todo.id} todo={todo}/>)}
    </div>;
}