require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const userRoutes = require('./routes/index');
require('./db/connection');

app.use(express.json());
app.use(userRoutes);

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        process.exit()
    }
    console.log(`Server started on ${port}`)
})