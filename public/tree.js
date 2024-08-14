// Получение всех кнопок переключения
const toggleButtons = document.querySelectorAll('.toggle-button1');

// Добавление обработчика события для каждой кнопки
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Переключение класса active для кнопки
        button.classList.toggle('active');
    });
});
