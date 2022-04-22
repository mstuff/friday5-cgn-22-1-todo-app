import {Todo} from "../model/Todo";
import {FormEvent, useState} from "react";
import {postTodosByApi} from "../service/TodoApiService";
import "./CreateTodo.css"


type CreateTodoProps = {
    addTodo: (newTodo: Todo) => void;
}

export default function CreateTodo({addTodo}: CreateTodoProps) {

    const [newDescription, setNewDescription] = useState<string>("");


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


    return <div className={"create-todo"}>


        <form onSubmit={handleSubmit}>
            <div>
                <label> What needs to be done?
                    <input
                        type={"text"}
                        value={newDescription}
                        onChange={(event => setNewDescription(event.target.value))}
                    />
                </label>
            </div>
            <div>
                <input type={"submit"}
                       value={"Add"}
                />
            </div>


        </form>


    </div>


}