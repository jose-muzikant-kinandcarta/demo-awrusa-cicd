MS CI/CD demo for Awrusa

This is a simple Node MS for showing how to use GitHub actions.

## Installation

This project was tested using node v18.17.1 and npm 9.6.7

1. npm install
2. create an .env file with yours:DYNAMODB_ACCESS_KEY_ID and DYNAMODB_SECRET_ACCESS_KEY
3. npm start server.js

## Usage

1. Get the app intention and description

curl http://localhost:3000/about

2. Get the distance between two zip codes (using https://www.zipcodeapi.com/)

curl http://localhost:3000/distance/10001/90001

3. Get all the Awrusa programs from a Dynamo DB
   curl http://localhost:3000/programs

## CI CD

CI CD is configured in

https://github.com/jose-muzikant-kinandcarta/demo-awrusa-cicd/blob/main/.github/workflows/cicd-workflow.yml

You can change the target branch, the steps and add more pipelines there

https://github.com/jose-muzikant-kinandcarta/demo-awrusa-cicd/actions

## Docker and AWS ECR

1. Installing the AWS cli (https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) you can build and push a Docker image to ECR following these steps:

    1. aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 659368592666.dkr.ecr.us-east-1.amazonaws.com
    2. docker build -t demo-devops-img-repository .
    3. docker tag demo-devops-img-repository:latest 659368592666.dkr.ecr.us-east-1.amazonaws.com/demo-devops-img-repository:latest
    4. docker push 659368592666.dkr.ecr.us-east-1.amazonaws.com/demo-devops-img-repository:latest

2. Build a local docker inage directly using :
    1. docker build --build-arg DYNAMODB_AK_ID=$YOUR_DYNAMO_AWS_A_KEY_ID --build-arg DYNAMODB_SECRET_AK=$YOUR_DYNAMO_AWS_SECRET_A_KEY -t your-image-name .
    2. docker run -p your_port:3000 -d your-image-name
