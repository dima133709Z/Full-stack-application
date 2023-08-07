import { useState, ChangeEvent } from 'react';
import { ITodo } from '../../types/types';
import './styles.css'

// Оголошення інтерфейсу для властивостей компонента
interface ITodoProps {
    todo: ITodo; // Об'єкт типу ITodo, який містить інформацію про завдання
    deleteTodo: (arg0: string) => void; // Функція для видалення завдання зі списку
    doneTodo: (arg0: string, arg1: boolean) => void; // Функція для позначення завдання як виконаного або невиконаного
    changeTodo: (arg0: string, arg1: boolean, arg2: string) => void; // Функція для зміни вмісту завдання
}

// Компонент TodoItem, який відображає окреме завдання списку
export const TodoItem = ({ todo, deleteTodo, doneTodo, changeTodo }: ITodoProps) => {
    // Стан для визначення, чи режим редагування завдання активний
    const [isTodoEdit, setIsTodoEdit] = useState(false);
    // Стан для збереження нового заголовка завдання при редагуванні
    const [newTitle, setNewTitle] = useState('');

    // Обробник події натискання клавіші Enter при редагуванні завдання
    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changeTodo(newTitle, todo.done, todo.id); // Зміна вмісту завдання
            setIsTodoEdit(!isTodoEdit); // Зміна стану режиму редагування
        }
    }

    // Обробник натискання на кнопку редагування завдання
    const handleTodoEdit = () => setIsTodoEdit(!isTodoEdit);

    // Обробник зміни вмісту завдання при редагуванні
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value);

    // Обробник натискання на кнопку видалення завдання
    const handleDelete = () => deleteTodo(todo.id);

    // Обробник натискання на кнопку позначення завдання як виконаного/невиконаного
    const handleComplete = () => doneTodo(todo.id, !todo.done);

    return (
        <li className={
            `todo-item list-group-item d-flex justify-content-between align-items-center
            ${todo.done ? 'list-group-item-success' : ''}`
        }>
            <div
                className='todo-text'
                onKeyPress={handleSubmit}
            >
                {isTodoEdit
                    ? <input type='text' onChange={handleTitleChange} />
                    : <span className={`${todo.done ? 'title-done' : ''}`}>{todo.title}</span>}
            </div>
            <div className="todo-btns">
                <button
                    onClick={handleTodoEdit}
                    className="todo-btn btn btn-primary"
                >
                    Змінити
                </button>
                <button
                    onClick={handleComplete}
                    className="todo-btn btn btn-success"
                >
                    Завершити
                </button>
                <button
                    onClick={handleDelete}
                    className="todo-btn btn btn-danger"
                >
                    Видалити
                </button>
            </div>
        </li>
    )
}
