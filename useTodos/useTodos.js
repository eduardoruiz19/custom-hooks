import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState=[];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    
    }, [todos])


    const handleNewTodo = (todo) => {
        console.log(todo);
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }
        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        //console.log(id);
        //return;
        const action = {
            type: "[TODO] Remove Todo",
            payload: id
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        console.log(id);
        //return;
        const action = {
            type: "[TODO] Toggle Todo",
            payload: id
        }
        dispatch(action);
    }

    const todosCount = () => {
        return todos.length;
    }

    return (
    {   todos, 
        
        handleNewTodo, 
        handleRemoveTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount: todos.filter(todo=> !todo.done).length        
    }
  )
}
