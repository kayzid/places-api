'use strict';


const express=require("express");
const expressValidator = require('express-validator');

const app=express();
const placesRoute=require('./Routes/placeRoutes');

const port=process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/v1/places',placesRoute);

app.listen(port,async () =>{
    console.log(`Server running on port ${port}`);    
});


app.use((req, res) => {
    res.status(404).send('Not found');
});

