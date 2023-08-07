import axios from 'axios';
import { ITodo, ITodoState } from '../types/types';

export class TodoApi {
    // Отримання списку справ з сервера
    static async getTodos(): Promise<ITodoState[]> {
        const res = await axios.get('http://localhost:3000/todos');
        return res.data;
    }

    // Створення нової справи на сервері
    static async createTodo(todo: Partial<ITodo>): Promise<ITodoState[]> {
        const res = await axios.post('http://localhost:3000/todos', todo);
        return res.data;
    }

    // Видалення справи за її ідентифікатором
    static async deleteTodo(id: string): Promise<void> {
        await axios.delete(`http://localhost:3000/todos/${id}`);
    }

    // Позначення справи як завершеної
    static async completeTodo(todo: Partial<ITodo>): Promise<void> {
        await axios.patch(`http://localhost:3000/todos/${todo.id}`, todo);
    }

    // Редагування даних справи
    static async editTodo(todo: Partial<ITodo>): Promise<ITodo> {
        const res = await axios.patch(`http://localhost:3000/todos/${todo.id}`, todo);
        return res.data[1][0]; // Повертаємо оновлені дані справи
    }
}