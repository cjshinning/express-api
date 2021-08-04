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

// 在模式参数后面加上问号，表示该参数可选
app.get('/hello/:who?', (request, response) => {
    if(request.params.who){
        response.end('Hello, ' + request.params.who + '.');
    }else{
        response.end('Hello, Guest.');
    }
    
});

app.get('*', (request, response) => {
    response.end('404 error!\n');
})

app.listen(3000);