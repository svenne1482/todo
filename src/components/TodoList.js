import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import './TodoList.css'

function TodoList({ todos, title }) {

    var taskElements = [];

    if(todos)
    {
        taskElements = todos.map((todo) => 
            <Todo name={todo.name}/>
        )
    }
    return (
        <div className="TodoList">
            {title}
            {taskElements}
        </div>
    );
}

export default TodoList