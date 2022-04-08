const sever = require('http');

sever.createServer((req, res)=>
{
    res.write('heelo world')
    res.end();

}).listen(3000)

sever.createServer((req, res)=>
{
    res.write('<h1>heelo world</h1>')
    res.end();

}).listen(3001)
sever.createServer((req, res)=>
{   
    const data =[{
        course:"mern"
    }]
    res.write()
    res.end();

}).listen(3003)

sever.createServer((req, res)=>
{   
    const data =[{
        name: "mahesh",
        age:23,
        email:"maheshaa123@gmail.com",
        joining:25-9-2021,
        course:"mern"
    }]
    res.write()
    res.end();

}).listen(3002)