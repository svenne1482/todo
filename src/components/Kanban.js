import React, { useState } from "react";
import TodoList from "./TodoList";
import './Kanban.css'
import TodoForm from "./TodoForm";

function Kanban() {
    const initialState = [{ name: "Städa", id: 0, status: 0 }, { name: "Dammsuga", id: 3, status: 0 }, { name: "Diska", id: 1, status: 1 }, { name: "Plugga", id: 2, status: 2 }];

    const [todos, setTodos] = useState(initialState);

    const AddTodo = (name) =>
    {
        let status = 0;
        let id = Math.max(...todos.map(todo => todo.id))+1;
        let newTodo = {name: name, id: id, status: status}

        setTodos([...todos,newTodo]);
    }

    return (
        <div className="Kanban">
            <TodoForm AddTodo={AddTodo}>  </TodoForm>
            <div className="TodoLists">
                <TodoList todos={todos.filter(todo => todo.status == 0)} title="Created"></TodoList>
                <TodoList todos={todos.filter(todo => todo.status == 1)} title="Started"></TodoList>
                <TodoList todos={todos.filter(todo => todo.status == 2)} title="Completed"></TodoList>
            </div>
        </div>
    );
}

export default Kanban