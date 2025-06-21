import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

export default function TodoForm() {
    const [todo, setTodo] = useState("");

    const {AddTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();

        if(!todo) return;
        
        AddTodo({todo: todo, completed: false});
        setTodo('');
    }
    
    return(
        <>
            <form className="flex" onSubmit={add}>
                <input 
                    type="text"
                    placeholder="Write Todo..."
                    className="bg-white/20 border border-black/10 w-full outline-none rounded-l-lg px-3 py-1.5 duration-150"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                 />
                 <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded-r-lg shrink-0">Add</button>   
            </form>
        </>
    )
}