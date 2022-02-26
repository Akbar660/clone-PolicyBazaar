const express=require("express");

const router=express.Router();

const Type=require("../models/typesModel")


router.get("/getAllTypes" ,async(req,res)=> {


try{

const types=await Type.find({})

console.log(types)
res.send(types)

}catch(error){
    
    return res.status(400).json({message:error})
}

})





module.exports=router