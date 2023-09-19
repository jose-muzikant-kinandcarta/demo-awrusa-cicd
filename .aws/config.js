require("dotenv").config(); // read .env

module.exports = {
    aws_table_name: "Programs",
    aws_local_config: {
        //Provide details for local configuration
    },
    aws_remote_config: {
        accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID, //ACCESS_KEY_ID
        secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY, //SECRET_ACCESS_KEY
        region: "us-east-1",
    },
};
