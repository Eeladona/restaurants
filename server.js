const express = require('express');
   const mongoose = require('mongoose');
   const app = express();

   const uri="mongodb+srv://Eel:12344321ladona@cluster0.ivnbzv2.mongodb.net/?retryWrites=true&w=majority"
   
   async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("connection successful")
    }
    catch(error){
        console.log(error)
    }
   }
 
   connect();
      //port connection
   app.listen(8000,() =>{
      console.log('db connecct to port 8000')
   })