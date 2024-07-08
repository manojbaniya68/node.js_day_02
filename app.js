const express = require("express")
const connectToDb = require("./database/database")
const blog = require("./model/blogModel")
const app = express()

connectToDb()

app.set('view engine','ejs')
app.use(express.json)
app.use(express.urlencoded({extended:true}))


app.get("/createblog",(req,res)=>{
    res.render("./blogs/blog.ejs")
})

app.post("/createblog",async (req,res)=>{
    
    const {title,subtitle,description} = req.body
      res.send("Post hitted")
     await blog.create({
          title,
          subtitle,
          description
      })
      console.log(title,subtitle,description)
      res.send("Blog created successfully")
})


app.listen(3000,()=>{
    
    console.log("Nodejs project has started at port "+3000 )
})