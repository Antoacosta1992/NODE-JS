
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT


//Servir contenido estatico
app.use(express.static('public'));

//app.get('/generic', (req,res) => {
  //  res.sendFile(__dirname + '/public/generic.html');
//});
//app.get('/elements', (req,res) => {
//    res.sendFile(__dirname + '/public/elements.html');
//});
//app.get('/generic', (req,res) => {
//    res.sendFile(__dirname + '/public/generic.html');
//});

//app.get('*', (req,res) =>{
  //  res.sendFile(__dirname + '/public/index.html');
//});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })