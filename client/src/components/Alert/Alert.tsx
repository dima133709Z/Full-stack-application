// Імпортуємо необхідні залежності з React та Redux
import { useDispatch } from 'react-redux';
import { hideAlert } from '../../redux/actions'; // Імпорт дії для закриття алерту
import { IAlertState } from '../../types/types'; // Імпорт інтерфейсу для стану алерту
import './styles.css' // Імпорт стилів для компонента

// Оголошуємо інтерфейс пропсів для компонента Alert
interface IAlertProps {
    props: IAlertState // Використовуємо інтерфейс IAlertState для опису пропсів
}

// Оголошуємо функціональний компонент Alert, який приймає пропси
export const Alert = ({ props }: IAlertProps) => {
    const dispatch = useDispatch(); // Використовуємо хук useDispatch для отримання функції диспетчингу

    // Функція для закриття алерту
    const handleAlertClose = () => dispatch(hideAlert());

    // Повертаємо JSX розмітку компонента Alert
    return (
        <div className={`alert alert-wrapper alert-${props.alertStatus}`}>
            {props.alertText}
            <button
                onClick={handleAlertClose}
                className='btn-close alert-btn'
            />
        </div>
    );
}