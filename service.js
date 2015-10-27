var restify = require('restify'),
    barcode = require('bwip-js'),
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
    var includetext = true;
    var height = 15;
    var scale = 3;
    var type = req.params.type;
    var text = req.params.text;

    if (req.params.includetext !== undefined) {
        includetext = (req.params.includetext === 'true') ? true : false;
    }

    if (req.params.height !== undefined) {
        height = req.params.height;
    }

    if (req.params.scale !== undefined) {
        scale = req.params.scale;
    }

    barcode.toBuffer({
        bcid: type,
        text: text,
        height: height,
        scale: scale,
        includetext: includetext,
        textfont: 'OCR-B',
        textalign: 'center',
        textsize: 10
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
