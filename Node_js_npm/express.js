const express = require("express")
const http = require('node:http')
const hostname = '127.0.0.1';
const port = 3000
const app = express()

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader = ('Content-Type','text/plain')
    res.end('HellomWorld\n')
})
app.get('/',(req,res)=>{
    res.send("Hello World!")
})

//app.get or app.post or app.put or app.delete(path , handler)
app.listen(port,()=>{
    console.log(`Example app listning on port http://${hostname}:${port}/`)
})

// Queries and params

app.get('/blog',(req,res)=>{
    res.send(`Hello`)
})
app.get('/blog/:slug',(req,res)=>{
    res.send(`Hello ${req.params.slug}`)
})