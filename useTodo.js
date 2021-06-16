import { useReducer } from 'react';
import { todoReducer } from '../components/08-useReducer/todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const handleDelete = (todoId) => {
        const actionDelete = {
            type: 'delete',
            payload: todoId
        }
        dispatch(actionDelete);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo

        });
    }

    return {
        todos,
        handleDelete,
        handleToggle,
        handleAddTodo
    }
}
