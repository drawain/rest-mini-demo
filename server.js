var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require('fs');

app.init = function() {
    app.meow = "meow1";
};

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/meow', function(req, res) {
    app.meow = req.body.meowinput;
    res.status(200).json({
        theValueOfMeow: app.meow
    });
});


app.get('/api/meow', function(req, res) {
    res.status(200).json({
        theValueOfMeow: app.meow
    });
});


app.get('/', function(req, res) {
    fs.readFile('form.html', function(err, data) {
        if (err) return res.status(500).send({});
        else res.status(200).send(data.toString());
    });
});


app.listen(process.env.PORT, function() {
    app.init();
    console.log('Server started in the port: ', process.env.PORT);
});


module.exports = app;