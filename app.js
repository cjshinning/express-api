const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

router.get('/', (req, res) => {
    res.send('首页');
})

router.get('/about', (req, res) => {
    res.send('关于');
})

app.use('/app', router);

app.listen(3000);
