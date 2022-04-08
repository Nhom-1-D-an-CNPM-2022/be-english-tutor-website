FROM node:14-stretch-slim
WORKDIR /app
COPY . /app
RUN npm install
CMD ["npm", "start"]