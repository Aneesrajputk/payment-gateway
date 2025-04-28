const express=require("express");
const {router}=require('./routes/Payments');
const app=express();
const port=4000;
require("dotenv").config();

app.use('/api/vi',router);

app.get('/',(req,res)=>{
    res.send("Hello Kaju");
})

app.listen(port,()=>{
    console.log(`app listening  at ${port}`);
    
});

