//This is a code to learn how middleware works

const express = require('express');
const app = express()
const port = 3000

// 1->middleware example
app.use(express.static('public'))

// 2->middleware example
app.use((req,res,next)=>{
    console.log("m1")
    next()
})

// 3->middleware example
app.use((req,res,next)=>{
    console.log("m2")
    // res.send("Hacked by middleware ")
    next()
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/about',(req,res)=>{
    res.send('Hello /about')
})
app.get('/contact',(req,res)=>{
    res.send('Hello contact')
})

app.listen(port,()=>{
    console.log(`App listning on port ${port}`)
})