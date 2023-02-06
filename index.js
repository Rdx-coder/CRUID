const express = require('express');

const port = 5555;

const mongoose = require('mongoose');

const app = express();
 
mongoose.connect('mongodb://localhost/developerDB');

const db = mongoose.connection;

db.on('open',()=>{
            console.log("connected to the database");
})

app.listen(port,function(err){
    if(err)
    {
        console.log("port is not  running on server ",port);

    }

    console.log("port is running on port :",port);

})