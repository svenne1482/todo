import React, { useState } from "react";

function TodoForm({AddTodo}) {

    const [name,setName] = useState();
    const SubmitHandler = (event) => 
    {
        event.preventDefault();

        AddTodo(name);
    }


    return(
        <form onSubmit={SubmitHandler}>
            <input type="text" onChange={e => setName(e.target.value)}></input>
            <input type="submit" ></input>
        </form>
    );
}

export default TodoForm