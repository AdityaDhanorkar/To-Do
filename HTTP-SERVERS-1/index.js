
const express = require('express');
const app = express();
const port = 3001;

app.get('/',function(req,res){
  res.send('Aditya Dhanorkar');
})

app.listen(port)