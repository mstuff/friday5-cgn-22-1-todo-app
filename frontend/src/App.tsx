import React from 'react';
import './App.css';
import useTodos from "./hooks/useTodos";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TodoOverviewPage from "./pages/TodoOverviewPage";


export default function App() {

    const {todos, addTodo} = useTodos();

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path={"/overview"}
                        element={<TodoOverviewPage todos={todos} addTodo={addTodo}/>}/>
                </Routes>

            </BrowserRouter>


        </div>
    );
}


/*
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
>
  Learn React
</a>


 */