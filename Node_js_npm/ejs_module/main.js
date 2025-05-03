const express = require('express');
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get( '/',(req,res)=>{

    let site="Pooma"
    let search="Addidas"
    res.render("index",{site:site,search:search})})

app.get( '/blog/:slug',(req,res)=>{
    let blogTitle = "Dell";
    let brand="Its a very good brand"
    
    res.render("templates/blogpost.html",{blogTitle:blogTitle,brabd:brand})
})

app.listen(port,()=>{

    console.log(`Application is running on port ${port}`)

})