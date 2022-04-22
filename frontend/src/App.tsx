import React from 'react';
import logo from './logo.svg';
import './App.css';
import useTodos from "./hooks/useTodos";
import OpenTodos from "./components/OpenTodos";
import CreateTodo from "./components/CreateTodo";

export default function App() {

    const {todos, addTodo} = useTodos();

  return (
    <div className="App">
      <header className="App-header">
          <OpenTodos todos={todos}/>
          <CreateTodo addTodo={addTodo}/>

      </header>
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