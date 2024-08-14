// Импортируем необходимые модули
const express = require('express');
const path = require('path');


// Создаем экземпляр приложения Express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для корня сайта "/"
app.get('/', (req, res) => {
  // Отправляем файл index.html при обращении к корню сайта
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});

// Обработчик для всех остальных маршрутов (404)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

// Запускаем сервер и слушаем указанный порт
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});


