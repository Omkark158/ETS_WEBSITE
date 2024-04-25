const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/Transaction");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

// app.get("/api/test",(req,res)=>{
//      res.json(body="test ok");
// } )

app.post('/api/transaction',async(req,res)=>{
     ("process.env.MONGO_URL"); 
     const{name,description,datetime} = req.body;
     const transaction = await Transaction.create({name,description,datetime});
    res.json(req.body);
})

app.listen(4000,()=>{
    console.log("server is listening on port no. 4000");
})