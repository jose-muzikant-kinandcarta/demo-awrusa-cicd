var request = require("request");

const apiKey = process.env.ZIPCODE_API_KEY || "PQz2CHFeVqe4BhQHtRT7oBv6dfq4RPBG7hx7GqoW9BMn4qPLz2tSEx2oXQUsG0qe";

const zipCodeURL = "https://www.zipcodeapi.com/rest/";

var distance = {
    find: function (req, res, next) {
        request(
            zipCodeURL + apiKey + "/distance.json/" + req.params.zipcode1 + "/" + req.params.zipcode2 + "/mile",

            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);

                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);

                    res.send({ distance: -1 });
                }
            }
        );
    },
};

module.exports = distance;
