const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.get('/about', (_req, res) => {
    res.send('This is the about page!')
})

app.get('/contact', (_req, res) => {
    res.send('Contact Me!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})