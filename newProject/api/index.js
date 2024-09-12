import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
//const express=require("express")


dotenv.config()
mongoose.connect(process.env.link).then(()=>{
    console.log("Connected To Mongodb")
}).catch((err)=>{
    console.log("Error:"+err)
})
const app=express()
app.listen(3000,()=>{
    console.log("server is running at port 3000")
})