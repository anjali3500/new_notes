const express=require("express");
const router=express.Router();
const Note=require("../models/noteModel");
//const app=express();


router.route("/create").post((req,res)=>{
    const title=req.body.title;
    const content=req.body.content;
    const newNote=new Note({
         title,
        content
    });

    console.log(newNote);


   // newNote.save();

     newNote.save().then((note)=>{
        res.status(201).json({"msg":"created","blog":note});
    }).catch((err)=>{
        if(err) return res.status(500).json(err);
    })
})







   


//router.route("/notes").get

module.exports=router;