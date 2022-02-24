const express=require("express");

const userController=require("./controllers/user.controller")


const app=express();
const db=require("./db")
app.use(express.json());



app.get("/", (req,res)=>{
    res.send("serverworking")
})


app.use("/api/users/",userController)

const port=process.env.PORT || 8000;
app.listen(port,()=>"serverrunning at port 8000")