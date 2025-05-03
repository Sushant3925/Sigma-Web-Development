import mongoose from "mongoose"
import express from "express"

import { employee } from "./models/Todo.js"
const app = express()

mongoose.connect("mongodb://localhost:27017/Company")

const port = 3000;
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('index',{foo:'FOO'})
})

function getRandom(arr) {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno];

}
app.get("/generate", async (req, res) => {
    await employee.deleteMany({})
    let names = ["harry", "sushant", "rohan"]
    let sal = [300000, 450000, 40300]
    let lang = ["python", "c", "js"]
    let cty = ["pune", "Benglore", "Haiderabad"]
    let isMan = [true, false, true]

    for (let index = 0; index < 10; index++) {

        let a = await employee.create({
            name: getRandom(names),
            salary: getRandom(sal),
            language: getRandom(lang),
            city: getRandom(cty),
            IsManager: getRandom(isMan)
        })
        console.log(a)
    }
})

app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
})