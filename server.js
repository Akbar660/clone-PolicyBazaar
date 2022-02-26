const express=require("express");

const userController=require("./controllers/user.controller")
const typeController=require("./controllers/types.controller")
const type1Controller=require("./controllers/types.controller")

const app=express();
const db=require("./db")
app.use(express.json());



app.get("/", (req,res)=>{
    res.send("serverworking")
})


app.use("/api/users/",userController)
app.use("/api/types/",typeController)
app.use("/api/types1/",type1Controller)

const port=process.env.PORT || 8000;
app.listen(port,()=>"serverrunning at port 8000")