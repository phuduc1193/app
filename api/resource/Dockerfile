FROM node:8.2.1-alpine

ENV PORT=3030
ENV DATABASE_HOST=resourcedb
ENV DATABASE_NAME=resource
ENV DATABASE_USER=user
ENV DATABASE_PASSWORD=qwerty12345
ENV DATABASE_PORT=3306

RUN mkdir /api
WORKDIR /api

COPY package.json /api
COPY . /api

RUN yarn
RUN yarn global add gulp

EXPOSE 3030

RUN gulp scripts
CMD ["npm", "start"]
