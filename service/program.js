const AWS = require("aws-sdk");
const config = require("../.aws/config.js");

var program = {
    get_all: function (req, res, next) {
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

module.exports = program;
