require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const cors = require('cors');
const userRoutes = require('./routes/index');
require('./db/connection');

app.use(cors())
app.use('/uploads',express.static(__dirname+'uploads'));
app.use(express.urlencoded({extended:true,limit:'10mb'}));
app.use(express.json({limit:'10mb'}));
app.use(userRoutes);

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        process.exit()
    }
    console.log(`Server started on ${port}`)
})