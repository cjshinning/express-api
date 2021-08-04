const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

app.set('View engine', 'jade');

// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);

app.get('/', (req, res) => {
    const body = 'Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
})

// app.get('/api', (req, res) => {
//     res.send({name: '张三', age: 40});
// })


const api = require('./routes/api');
app.get('/api', api.index);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'));