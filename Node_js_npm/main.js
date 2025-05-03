
// js type commen
//  const fs = require("fs")
 
//  console.log(fs)
// console.log("Starting")
//  fs.writeFileSync("data.txt","this is the fist code of node js")

// fs.writeFile("data2.txt","How are you",()=>{
//     console.log("done")
//     fs.readFile("data2.txt",(error,data)=>{
//         console.log(data.toString())
//         //Again same code
        //Call back haed->
//         fs.writeFile("data2.txt","How are you",()=>{
//             console.log("done")
//             fs.readFile("data2.txt",(error,data)=>{
//                 console.log(data.toString())
//             })
//         })
        
//     })
// })

 
// fs.appendFile("/Node_js_npm/data2.txt","How are you my friend",(e,d)=>{
//     console.log(d)
// })

//code , when the type of js is  module

import fs from "fs/promises"
import path from "path"

// let b = await fs.appendFile("D:\\vs code\\Sigma_Web_development_course\\Node_js_npm\\data.txt","What a great Idea!\n\n\n\n\nthis is amazing promise\n")
// let a = await fs.readFile("data.txt")

// console.log(a.toString(),b)

let mypath = "D:\\vs code\\Sigma_Web_development_course\\Node_js_npm\\data.txt"
console.log(path.extname(mypath))

   