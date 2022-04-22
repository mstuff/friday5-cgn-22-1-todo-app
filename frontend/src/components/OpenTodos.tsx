import TodoCard from "./TodoCard";
import {Todo} from "../model/Todo";

type OpenTodosProps = {
    todos: Todo[];
}

export default function OpenTodos({todos}:OpenTodosProps){
    return <div>
        {todos.map(todo => <TodoCard key={todo.id} todo={todo}/>)}
    </div>

}
