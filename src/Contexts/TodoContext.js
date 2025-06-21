import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: 'Todo msg',
            completed: false
        }
    ],

    AddTodo: (todo) => {},
    UpdateTodo: (id, todo) => {},
    DeleteTodo: (id) => {},
    CompletedTodo: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
    return useContext(TodoContext);
}