import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
const PORT=process.env.PORT;
const URI="mongodb+srv://Akhil:Akhil1234@cluster0.ghgsmj9.mongodb.net/MERNEcommerce?retryWrites=true&w=majority&appName=Cluster0";
const app=express();

app.use(express.json());
app.use(cors());
mongoose.connect(URI).then(()=>{
    console.log("Connected to MongoDB");
})

app.listen(PORT,()=>console.log("Server Started"));