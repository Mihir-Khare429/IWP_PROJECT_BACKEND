require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const cors = require('cors');
const userRoutes = require('./routes/index');
const bodyParser = require('body-parser')
require('./db/connection');

app.use(cors())
app.use('/uploads',express.static(__dirname+'uploads'));
app.use(bodyParser.urlencoded({limit: '12mb', extended: true, parameterLimit: 1000000}));
app.use(bodyParser.json({limit: '12mb'}));
app.use(userRoutes);

app.listen(port,(err)=>{
    if(err){
        console.log(err)
        process.exit()
    }
    console.log(`Server started on ${port}`)
})