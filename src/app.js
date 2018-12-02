"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
var user_1 = require("./models/user");
var user_2 = require("./controllers/user");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        this.app.use('/', this.routes());
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // this.app.use(Auth.initialise());
    };
    App.prototype.routes = function () {
        var router = express.Router();
        router.get('/api', function (req, res) {
            console.log('Request received');
            res.status(200).send({
                message: 'Hello World!'
            });
        });
        router.post('/api/posts', function (req, res) {
            res.json({
                message: 'Post created'
            });
        });
        router.post('/api/create', function (req, res) {
            var user = new user_1.User();
            user = { email: req.body.data.username, fullname: req.body.data.fullname, password: req.body.data.password };
            user_2.Users.createUser(user);
            res.json({
                message: 'Account created'
            });
        });
        router.post('/api/login', function (req, res) {
            var user = {
                id: 1,
                username: 'kostas',
                email: 'kostas@gmail.com'
            };
            jwt.sign({ user: user }, 'secretkey', function (err, token) {
                res.json({
                    token: token
                });
            });
        });
        return router;
    };
    return App;
}());
exports["default"] = new App().app;
