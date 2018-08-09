
const path= require('path');  
const express = require('express');

var app = express();
const port=process.env.PORT || 3000;
const publicPath = path.join(__dirname,'../public');


app.listen(3000,() =>{
    console.log('Started Server at 3000 port');
})
console.log(publicPath);