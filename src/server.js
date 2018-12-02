"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var port = 5000;
var hostname = '127.0.0.1';
app_1["default"].use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});
app_1["default"].listen(port, hostname, function () {
    console.log('Express server listening on port ' + port);
});
