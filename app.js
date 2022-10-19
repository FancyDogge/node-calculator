const express = require('express');
const app = express();
const PORT = 3000;

const routes = require('./routes/routes')

app.use('/', routes)

app.listen(PORT, () => {
    console.log('Server is up and running on port: ' + PORT)
});