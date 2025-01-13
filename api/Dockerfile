# Dockerfile for API
FROM node:14-alpine

WORKDIR /api

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3001

CMD ["node", "api/hello.js"]