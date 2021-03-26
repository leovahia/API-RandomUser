const people = require('./teste_faker');

const express = require('express')
const api = express();
const port = 3000;

api.get('/', (req, res)=>{
    res.send(people);
});

api.listen(port, ()=>{
    console.log(`API está ativa no http://localhost:${port}`);
});