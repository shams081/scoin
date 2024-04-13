const express = require('express');
const app = express();
const path = require('path');

// Устанавливаем папку, из которой будут обслуживаться статические файлы
app.use(express.static(path.join(__dirname)));

// Отправляем HTML-файл при запросе корневого URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запускаем сервер и слушаем порт 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}`);
});
