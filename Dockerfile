FROM node:jod-alpine

LABEL org.opencontainers.image.description="GOV.UK Eleventy"

WORKDIR /app

COPY package*.json eleventy.config.js ./
COPY docs docs

RUN npm install

CMD ["npm", "start"]