FROM node:16.14-alpine

WORKDIR /app

COPY ./ /app

RUN npm install