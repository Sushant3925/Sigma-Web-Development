import mongoose from "mongoose"

import {Todo} from "./models/Todo.js"
import express from "express"
let a = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get("/",(req,res)=>{
    const todo = new Todo({title: "Mongoose Introduction",desc:"Using express",isDone:true,days:Math.floor(Math.random()*45)})
    todo.save()
    res.send("Hello Sushant")
})

app.get("/a",async(req,res)=>{
    let todo = await Todo.findOne({})
    res.json({title:todo.title,desc:todo.desc})
})
app.listen(port,()=>{
    console.log(`Application is running on port ${port}`)
})
