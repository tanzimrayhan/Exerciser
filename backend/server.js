const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const port = process.env.PORT ;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
//mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true});

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(uri, {useNewUrlParser:true,useUnifiedTopology: true},(err, client)=> {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('MongoDB database connection established successfully...');
   
   //client.close();
});

const exerciseRouter=require('./routes/exercises');
const userRouter=require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
