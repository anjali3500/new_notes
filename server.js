const express=require("express");
//const bodyparser=require("body-parser");

const bodyParser=require('body-parser');
const apps=express();
const cors=require("cors");
const mongoose=require("mongoose");

apps.use(cors());


apps.use(express.json());
apps.use(bodyParser.json())





mongoose.set('useUnifiedTopology', true);

//connect to mongoose

mongoose.connect("mongodb+srv://anjali35:anu1234@cluster0.1z6og.mongodb.net/notes-app",{ useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
    console.log('database connected')
})
.catch((err)=>{
    console.log(err)
})


apps.use("/",require("./routes/noteRoute"));

apps.listen(5000,function(){

    console.log("express running at 5000");
})