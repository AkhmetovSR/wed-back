const mySql = require("mysql2")
const db = mySql.createPool(
    {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "qwerty",
        database: "wed"
    }
);

module.exports=db;