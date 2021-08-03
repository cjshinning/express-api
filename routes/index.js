module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello world!');
    })
    app.get('/customer', (req, res) => {
        res.send('customer page!');
    })
    app.get('/admin', (req, res) => {
        res.send('admin page!');
    })
}