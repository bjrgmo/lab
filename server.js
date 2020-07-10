const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});


// Hva skjer hvis jeg prøver å nå noe som det ikke er routet noe til?
// Luddis nevner jeg burde ha wild card
app.get('/*', function (req, res) {
    res.send('<p>Hello Motherfucker</p>');
});