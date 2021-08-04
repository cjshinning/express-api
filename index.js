const express = require('express');
const app = express();

app.use('*', (request, response, next) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    next();
});

app.get('/', (request, response) => {
    response.end('Welcome to the homepage!\n');
});

app.get('/about', (request, response) => {
    response.end('Welcome to the about page!\n');
});

app.get('/hello/:who', (request, response) => {
    response.end('Hello, ' + request.params.who + '.');
});

app.get('*', (request, response) => {
    response.end('404 error!\n');
})

app.listen(3000);