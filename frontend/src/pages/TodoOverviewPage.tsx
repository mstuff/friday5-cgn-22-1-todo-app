import OpenTodos from "../components/OpenTodos";
import {Todo} from "../model/Todo";
import CreateTodo from "../components/CreateTodo";


type GalleryPageProps = {
    todos: Todo [];
    addTodo: (newTodo: Todo) => void;
}


export default function TodoOverviewPage({todos, addTodo}: GalleryPageProps){

    return <div>
        <div>
        <OpenTodos todos={todos}/>
        </div>
        <div>
        <CreateTodo addTodo={addTodo}/>
    </div>
    </div>

}