var express = require('express');
var app = express();
var formidable = require("formidable");
var fs = require("fs");

app.get('/', function (req, res) {
    res.send('Test formidable!');
});

app.use('/public', express.static(__dirname + '/public'));

app.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req, function(error, fields, files) {
        console.log("parsing done");
        console.log(files.upload.path);

        fs.createReadStream(files.upload.path).pipe(fs.createWriteStream(__dirname + '/public/test.png'));
        res.redirect("public/upload.html") ;


        // console.log(fields.firstname);
        // console.log(fields.lastname);
        // res.send(fields.firstname + " " + fields.lastname);
    });
});

var server = app.listen(8088, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});