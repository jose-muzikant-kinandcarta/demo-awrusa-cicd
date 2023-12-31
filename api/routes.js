"use strict";

var controller = require("../controller");

module.exports = function (app) {
    app.route("/about").get(controller.about);

    app.route("/echo/:name").get(controller.echo);

    app.route("/distance/:zipcode1/:zipcode2").get(controller.get_distance);

    app.route("/programs").get(controller.get_programs);
};
