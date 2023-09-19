"use strict";

const AWS = require("aws-sdk");
const config = require("./.aws/config.js");

var properties = require("./package.json");
var distance = require("./service/distance");
var controllers = {
    about: function (req, res) {
        var aboutInfo = { name: properties.name, version: properties.version };
        res.json(aboutInfo);
    },
    get_distance: function (req, res) {
        distance.find(req, res, function (err, dist) {
            if (err) res.send(err);
            res.json(dist);
        });
    },
    hello: function (req, res) {
        var hello = { hello: req.params.name };
        res.json(hello);
    },
    get_programs: function (req, res) {
        AWS.config.update(config.aws_remote_config);

        const docClient = new AWS.DynamoDB.DocumentClient();

        const params = {
            TableName: config.aws_table_name,
        };

        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err);
                res.send({
                    success: false,
                    message: err,
                });
            } else {
                const { Items } = data;
                res.send({
                    success: true,
                    programs: Items,
                });
            }
        });
    },
};

module.exports = controllers;
