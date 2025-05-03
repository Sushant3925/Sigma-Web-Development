const express = require('express')
const app = express()
const port = 3000

const hostname = '127.0.0.1'

app.use(express.static("public"))

// app.get('/', (req, res) => {
//     console.log("How are you get")
//     res.send('Hello sushant!')
// })

// // to get Confidential data from server we use post request
// app.post('/', (req, res) => {
//     console.log("How are you post")
//     res.send("Hey its post requset")
// })

// //To update data 
// app.put('/', (req, res) => {
//     console.log("How are you put")
//     res.send("Hey its put requset")
// })

// Chaining of Request
app.get('/', (req, res) => {
    console.log("How are you get")
    res.send('Hello sushant!')
}).post('/', (req, res) => {
    console.log("How are you post")
    res.send("Hey its post requset")
}).put('/', (req, res) => {
    console.log("How are you put")
    res.send("Hey its put requset")
})

app.get("/index", (req, res) => {
    console.log("How are you index")
    res.sendFile("templates/index.html",{root:__dirname})

})
app.get("/index", (req, res) => {
    console.log("How are you index")
    res.download("templates/index.html",{root:__dirname})

})
app.get("/json", (req, res) => {
    res.json({a:2,b:3,name:["sushant","Nayan"]})

})
app.listen(port, () => {
    console.log(`app listning on port http://${hostname}:${port}`)
})