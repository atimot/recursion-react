FROM node:22-alpine
ENV NODE_ENV=development

COPY ./my-react-app /my-react-app

WORKDIR /my-react-app

RUN npm install
