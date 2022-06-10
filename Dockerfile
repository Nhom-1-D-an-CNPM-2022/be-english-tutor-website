# syntax=docker/dockerfile:1
FROM node:14-stretch-slim
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . /app
CMD ["npm", "start"]