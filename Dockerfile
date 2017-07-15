FROM node:8-alpine

WORKDIR /app

CMD node_modules/.bin/nodemon index.js

EXPOSE 8000

VOLUME /app
