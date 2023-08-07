import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createTodo, showAlert } from '../../redux/actions/index';
import { IAlertReducer } from "../../types/types";
import { Alert } from "../Alert/Alert";

export const TodoForm = () => {
    // Створення локального стану для збереження назви завдання
    const [title, setTitle] = useState('')
    // Отримання стану алерту зі зберіганням введених даних
    const alertState = useSelector((state: IAlertReducer) => state.alertReducer)
    const dispatch = useDispatch()

    // Обробник подачі форми
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Перевірка, чи назва не є порожньою або складається лише з пробілів
        if (!title.trim()) {
            dispatch(showAlert('Назва завдання не може бути порожньою', 'warning'))
            return
        }

        // Диспетчеризація дії створення завдання та очищення поля вводу
        dispatch(createTodo(title))
        setTitle('')
    }

    // Обробник зміни значення поля вводу
    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Відображення алерту, якщо текст алерту не порожній */}
            {alertState.alertText.length > 0 && <Alert props={alertState} />}
            <div className="mb-3 d-flex align-items-end justify-content-between">
                <div className="form-group" style={{ width: '92%', marginRight: '10px' }}>
                    <label htmlFor="" className="form-label">Введіть назву завдання</label>
                    {/* Поле вводу для назви завдання */}
                    <input
                        onChange={handleChangeInputValue}
                        type="text"
                        className="form-control"
                    />
                </div>
                {/* Кнопка для створення завдання */}
                <button className="btn btn-success">Створити</button>
            </div>
        </form>
    )
}