const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor funcionando puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

