const express=require("express");


// const pizzaController = require("./controllers/pizza.controller")


const app=express();
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("serverworking")
})




const port=process.env.PORT || 5000;
app.listen(port,()=>"serverrunning at port 5000")