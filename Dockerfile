# Define the docker hub image: https://hub.docker.com/_/node/
FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

ENV NODE_ENV=development
ENV MONGO_DB_URL=mongodb+srv://homi:homi@cluster0.jgjpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

EXPOSE 5000
CMD [ "npm", "start" ]
