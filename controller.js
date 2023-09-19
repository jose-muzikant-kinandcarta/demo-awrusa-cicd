"use strict";

const AWS = require("aws-sdk");
const config = require("./.aws/config.js");

var properties = require("./package.json");
var distance = require("./service/distance");
var program = require("./service/program");

var controllers = {
    about: function (req, res) {
        var aboutInfo = { name: properties.name, description: properties.description, version: properties.version };
        res.json(aboutInfo);
    },
    echo: function (req, res) {
        var name = { goodbye: req.params.name };
        res.json(name);
    },
    get_distance: function (req, res) {
        distance.find(req, res, function (err, dist) {
            if (err) res.send(err);
            res.json(dist);
        });
    },
    get_programs: function (req, res) {
        program.get_all(req, res, function (err, dist) {
            if (err) res.send(err);
            res.json(dist);
        });
    },
};

module.exports = controllers;
