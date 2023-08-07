// Компонент Header відповідає за верхню частину сторінки
export const Header = () => {
    return (
        <header style={{ backgroundColor: '#000000', color: 'white' }}>
            <div className="container pt-3 pb-3">
                <h1>Todo App</h1> {/* Заголовок програми "Список справ" */}
            </div>
        </header>
    )
}