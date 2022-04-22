import {Todo} from "../model/Todo";
import {FormEvent, useState} from "react";
import {postTodosByApi} from "../service/TodoApiService";
import TodoOverviewPage from "../pages/TodoOverviewPage";


type CreateTodoProps = {
    addTodo: (newTodo: Todo) => void;
}

export default function CreateTodo({addTodo}: CreateTodoProps) {

    const [newDescription, setNewDescription] = useState<string>("");
    const [newStatus, setStatus] = useState<string>("OPEN");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!newDescription) {
            alert(`You need to write down your todo!`);
            return;
        }

        const newTodo: Todo = {
            status: "OPEN",            
            description: newDescription
        }

        postTodosByApi(newTodo)
            .then((todo) => addTodo(todo));

    }


    return <div>
        Add description

        <form onSubmit={handleSubmit}>
            <div>
                <label> what needs to be done:
                    <input
                        type={"text"}
                        value={newDescription}
                        onChange={(event => setNewDescription(event.target.value))}
                    />
                </label>
            </div>
            <div>
                <input type={"submit"}
                       value={"??"}
                />
            </div>


        </form>


    </div>


}