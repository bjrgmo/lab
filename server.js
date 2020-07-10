const express = require('express');
const path = require('path');
const cors = require('cors');
const port = 3000;
const app = express();

app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});


app.get('/api/fridges', function(req, res){
    res.send(['fridge one', 'fridge two', 'fridge three']);
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/frontend/index.html'));
});