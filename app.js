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
    res.send('Hello World');
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'));