const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const hbs = require('hbs');

const blogEngine = require('./blog');

app.set('view engine', 'html');

app.engine('html', hbs.__express);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: '最近文章',
        entries: blogEngine.getBlogEntries()
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: '自我介绍'
    });
})

app.get('/article/:id', (req, res) => {
    const entry = blogEngine.getBlogEntry(req.params.id);
    console.log(entry);
    res.render('article', {
        title: entry.title,
        blog: entry
    });
})

app.listen(3000);
