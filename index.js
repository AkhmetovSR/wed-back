const express = require("express");
const cors = require("cors");
const app = express(); //Express - веб фреймворк для node.js
const myDb = require('./config/db');
const {query} = require("express");
const rout = require('./routes/router');


// const TelegramBot = require('node-telegram-bot-api');
// // const token = process.env.TOKEN;
// const token = "7524776934:AAE8TC2593E-qjCqSZXiO_A0IPn5TGFU6pU";
// const bot = new TelegramBot(token, {polling: true});
// const webAppUrl = 'https://192.168.0.5:3000/'
//
// bot.on('message', async (msg) => {
//     const chatId = msg.chat.id;
//     const text = msg.text;
//     if(text === '/start'){
//         await bot.sendMessage(chatId, 'Go mine LBRTY coin with us!', {
//             reply_markup: {
//                 inline_keyboard: [
//                     [{text: 'Start', web_app: {url: webAppUrl}}]
//                 ]
//             }
//         })
//     }
// });

//npm run dev