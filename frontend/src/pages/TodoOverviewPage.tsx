import OpenTodos from "../components/OpenTodos";
import {Todo} from "../model/Todo";
import CreateTodo from "../components/CreateTodo";
import InProgressTodos from "../components/InProgressTodos";
import DoneTodos from "../components/DoneTodos";
import "./TodoOverviewPage.css"


type GalleryPageProps = {
    todos: Todo [];
    addTodo: (newTodo: Todo) => void;
}


export default function TodoOverviewPage({todos, addTodo}: GalleryPageProps) {

    return <div className={"overview-page"}>
        <div className={"todo-board"}>
            <div>
                <OpenTodos todos={todos.filter(element => element.status.includes("OPEN"))}/>
            </div>
            <div>
                <InProgressTodos todos={todos.filter(element => element.status.includes("IN_PROGRESS"))}/>
            </div>
            <div>
                <DoneTodos todos={todos.filter(element => element.status.includes("DONE"))}/>
            </div>
        </div>
        <div>
            <CreateTodo addTodo={addTodo}/>
        </div>
    </div>

}

