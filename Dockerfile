# syntax=docker/dockerfile:1
ARG NODE_VERSION=20.14.0
FROM node:${NODE_VERSION}-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
