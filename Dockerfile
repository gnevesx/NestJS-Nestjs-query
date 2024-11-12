
FROM node:16-alpine AS development

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn add typescript@4.8.4 --dev
RUN yarn add @types/node@14.17.0 --dev

COPY . .

CMD ["yarn", "start:dev"]
