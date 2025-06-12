FROM node:jod-alpine

WORKDIR /app

COPY package*.json eleventy.config.js ./
COPY docs docs

RUN npm install

CMD ["npm", "start"]