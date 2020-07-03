const express = require('express');

const app = express();

app.use(express.json());
const projects = [];

app.get('/projects', (req, res)=>{
    //todo
});

app.post('/projects', (req, res)=>{
//todo
});

module.exports = app;