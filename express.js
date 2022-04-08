const express = require('express');
const { Server } = require('http');

const server =express();

server.get('/', (req, res)=>{
    const data = [{
        name:'abc',
        number:24,
        age:34
    },
    {
        name:'agfbc',
        number:64,
        age:24
    },
    {
        name:'kjabc',
        number:274,
        age:36
    }]
    // res.send('hello world')
    res.send(data)
    
}).listen(3001)