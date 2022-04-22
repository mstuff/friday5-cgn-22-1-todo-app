import OpenTodos from "../components/OpenTodos";
import {Todo} from "../model/Todo";
import CreateTodo from "../components/CreateTodo";


type GalleryPageProps = {
    todos: Todo [];
    addTodo: (newTodo: Todo) => void;
}


export default function TodoOverviewPage({todos, addTodo}: GalleryPageProps){

    return <div>
        <OpenTodos todos={todos}/>
        <CreateTodo addTodo={addTodo}/>
    </div>

}