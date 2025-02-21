const express = require('express');
const router = require('express').Router();
const newlywedController = require("../controller/newlywedController.js");
const cors = require("cors");
const PORT = 89;
const app = express();                                            //Express - веб фреймворк для node.js
app.listen(PORT)
app.use(cors({cors, optionsSuccessStatus: 200}))                            // Убрать данную строку из Deploy
// app.use(cors({origin: 'https://lbrty.space', optionsSuccessStatus: 200}))   // Включить данную строку в Deploy
// app.get("/test", userController.test);
// app.post("/api/getUser", userController.getUser);
// app.post("/api/addNewUserAndStartMining", userController.addUser);
// app.post("/api/claimProfit", userController.claimProfit);
// app.post("/api/getEarns", userController.getEarns);
// app.post("/api/EarnComplete", userController.EarnComplete);

app.get("/api/dataWed", newlywedController.getAllData);
// app.get("/api/getAllCompany", companyController.getAllCompany);

module.exports = router;