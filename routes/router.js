const express = require('express');
const router = require('express').Router();
const newlywedController = require("../controller/newlywedController.js");
const cors = require("cors");
const PORT = 89;
const app = express();                                            //Express - веб фреймворк для node.js
app.listen(PORT)
app.use(cors({
    origin: '*', // Разрешить запросы с любого источника (для тестирования)
    methods: 'GET,POST', // Разрешенные HTTP-методы
    optionsSuccessStatus: 200 // Для старых браузеров
}));                           // Убрать данную строку из Deploy

app.get("/api/inf", newlywedController.getAllData);

module.exports = router;