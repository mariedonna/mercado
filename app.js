const express = require ('express');
const app = express ();
const path = require('path');

app.listen(3000,()=> 
console.log('corriendo servidor en puerto 3000'));

app.get('/',(req,res)=> 
res.sendFile(path.join(__dirname, '/views/index.html')));

app.get('/indexno',(req,res)=> 
res.sendFile(path.join(__dirname, '/views/indexno.html')));

app.get('/login',(req,res)=> 
res.sendFile(path.join(__dirname, '/views/login.html')));

app.get('/loginvf',(req,res)=> 
res.sendFile(path.join(__dirname, '/views/loginvf.html')));

app.get('/register',(req,res)=> 
res.sendFile(path.join(__dirname, '/views/register.html')));

app.get('/registervf',(req,res)=> 
res.sendFile(path.join(__dirname, '/views/registervf.html')));


app.use(express.static(__dirname + '/public'));

