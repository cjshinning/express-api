const express = require('express');
const app = express();

app.use((request, response, next) => {
    if(request.url == '/'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Welcome to the homepage!\n');
    }else{
        next();
    }
});

app.use((request, response, next) => {
    if(request.url == '/about'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Welcome to the about page!\n');
    }else{
        next();
    }
});

app.use((request, response) => {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('404 error!\n');
})

app.listen(3000);