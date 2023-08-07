import { ITodoActionTypes } from '../../types/types';

// Отримати список завдань
export const getTodos = () => {
    return {
        type: ITodoActionTypes.GET_TODOS,
    }
}

// Створити нове завдання
export const createTodo = (payload: string) => {
    return {
        type: ITodoActionTypes.CREATE_TODO,
        payload
    }
}

// Видалити завдання за його ідентифікатором
export const deleteTodo = (payload: string) => {
    return {
        type: ITodoActionTypes.DELETE_TODO,
        payload
    }
}

// Позначити завдання як виконане або невиконане
export const completeTodo = (id: string, done: boolean) => {
    return {
        type: ITodoActionTypes.COMPLETE_TODO,
        payload: {
            id,
            done
        }
    }
}

// Редагувати інформацію про завдання
export const editTodo = (id: string, done: boolean, title: string) => {
    return {
        type: ITodoActionTypes.EDIT_TODO,
        payload: {
            id,
            done,
            title
        }
    }
}

// Показати повідомлення (алерт)
export const showAlert = (text: string, status: string) => {
    return {
        type: ITodoActionTypes.SHOW_ALERT,
        payload: text,
        status
    }
}

// Приховати повідомлення (алерт)
export const hideAlert = () => {
    return {
        type: ITodoActionTypes.HIDE_ALERT,
    }
}
