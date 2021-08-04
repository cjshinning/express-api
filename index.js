const express = require('express');
const app = express();

app.use('/home', (request, response, next) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Welcome to the homepage!\n');
});

app.use('/about', (request, response, next) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Welcome to the about page!\n');
});

app.use((request, response) => {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('404 error!\n');
})

app.listen(3000);