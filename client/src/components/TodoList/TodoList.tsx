import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { completeTodo, deleteTodo, editTodo } from "../../redux/actions";
import { ITodoReducer } from '../../types/types';
import { TodoItem } from "../TodoItem/TodoItem";
import './styles.css';

export const TodoList = () => {
    // Отримуємо дані зі стору за допомогою useSelector
    const state = useSelector((state: ITodoReducer) => state.todoReducer);
    const dispatch = useDispatch();

    // Функції для внесення змін у список завдань
    const changeTodo = (title: string, done: boolean, id: string) => {
        dispatch(editTodo(id, done, title)); // Диспатчимо дію для редагування завдання
    }

    const removeTodo = (id: string) => {
        dispatch(deleteTodo(id)); // Диспатчимо дію для видалення завдання
    }

    const doneTodo = (id: string, done: boolean) => {
        dispatch(completeTodo(id, done)); // Диспатчимо дію для позначення завдання як виконане
    }

    return (
        <TransitionGroup component='ul' className='list-group'>
            {/* Мапуємо кожне завдання зі стору */}
            {state.todos.map(todo => (
                <CSSTransition
                    timeout={800}
                    classNames={'todo'}
                    key={todo.id}
                >
                    {/* Відображаємо компонент TodoItem для кожного завдання */}
                    <TodoItem
                        todo={todo}
                        deleteTodo={removeTodo}
                        doneTodo={doneTodo}
                        changeTodo={changeTodo}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}
