FROM node:18
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
COPY . .

#creating secret keys for Dynamo DB 
ARG DYNAMODB_AK_ID
ARG DYNAMODB_SECRET_AK
RUN echo DYNAMODB_ACCESS_KEY_ID=${DYNAMODB_AK_ID} > .env
RUN echo DYNAMODB_SECRET_ACCESS_KEY=${DYNAMODB_SECRET_AK} > .env

EXPOSE 3000
CMD [ "node", "server.js" ]