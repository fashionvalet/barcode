var restify = require('restify'),
    barcode = require('bwip-js'),
    fs = require('fs'),
    baseUrl = '/barcode';


var server = restify.createServer({
    name: "FashionValet"
});

server.use(restify.queryParser());

server.get(baseUrl + '/', function (req, res, next) {
    res.redirect(baseUrl + '/generate', next);

    return next();
});

server.get(baseUrl + '/generate', function (req, res, next) {
    var type = req.params.type;
    var text = req.params.text;

    barcode.toBuffer({
        bcid: type,
        text: text,
        height: 15,
        scale: 3,
        includetext: true,
        textfont: 'OCR-B',
        textalign: 'center',
        textsize: 12
    }, function (err, png) {
        if (err) {
            return next(new restify.InvalidArgumentError(err));
        } else {
            res.contentType = 'image/png';
            res.write(png);
            res.end();
            return next();
        }
    });
});

server.listen(8080);
