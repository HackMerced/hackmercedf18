const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const api = require('./api/routes');

app.listen(port, () => console.log('server has started!'));

app.use((req, res, next) => {
    console.log('time: ', new Date());
    next()
});
app.use('/api', api);
app.use(express.static(path.resolve(__dirname, 'test_public')));
app.get('*', (req, res) => {
    console.log('index accessed');
    res.sendFile(path.join(__dirname, 'test_public/test_index.html'));
});

