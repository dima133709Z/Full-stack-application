// Імпортуємо необхідні типи з іншого файлу
import { IAlertState, IAlertAction, ITodoActionTypes } from '../types/types';

// Початковий стан для редуктора
const initialState = {
    alertText: '',        // Текст повідомлення алерту
    alertStatus: ''       // Статус алерту (наприклад, "попередження" чи "помилка")
}

// Оголошення функції-редуктора для управління станом алертів
export const alertReducer = (state: IAlertState = initialState, action: IAlertAction) => {
    switch (action.type) {
        case ITodoActionTypes.SHOW_ALERT:
            return { alertText: action.payload, alertStatus: action.status }  // Показати алерт з вказаним текстом та статусом
        case ITodoActionTypes.HIDE_ALERT:
            return { alertText: '', alertStatus: '' }  // Сховати алерт (очистити тексти та статус)
        default:
            return state;  // Повернути поточний стан, якщо дія не відповідає ні одному з варіантів
    }
}
