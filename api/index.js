import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Successfully connected to mongod')
}).catch((err)=>{
    console.log("Error"+ err);
})

const app = express();

app.get('/',(req,res)=>{
    res.send('test');
})

app.listen(3000,()=>{
    console.log('app running on port 3000');
})