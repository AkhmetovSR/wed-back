const db = require("../config/db")
const e = require("express");
class Newlywed {
    static async getData(request) {
        const sql = "SELECT * FROM wed.newlywed left join wed.template on newlywed.templateId = template.id;"
        return new Promise((resolve) => {
            db.query(sql, (err, result) => {
                if (!err) {
                    console.log(result)
                    resolve(result)
                }
                if (err) console.log(err)
            })

        })
    }
}
module.exports = Newlywed;