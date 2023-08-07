// Імпорт функції combineReducers з бібліотеки redux
import { combineReducers } from 'redux';

// Імпорт редуктора для управління станом задач (todo)
import { todoReducer } from './todoReducer';

// Імпорт редуктора для управління станом сповіщень (alert)
import { alertReducer } from './alertReducer';

// Створення кореневого редуктора шляхом комбінування різних редукторів
export const rootReducer = combineReducers({
    todoReducer, // Використовується редуктор для управління станом задач
    alertReducer // Використовується редуктор для управління станом сповіщень
});