const newlywed = require("../models/newlywed.js")

class CategoryController {
    static async getAllData(req, res){
        console.log("get start query")
        let result = await newlywed.getData(req);
        if(result) res.send(result)
        if(!result) console.log("CategoryController error")
    }
}

module.exports=CategoryController;