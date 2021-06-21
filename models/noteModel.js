const mongoose=require("mongoose");

const notesSchema=({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
});

// const Note=mongoose.model("Note",notesSchema);

// mongoose.exports=Note;

module.exports=mongoose.model('Note',notesSchema);
