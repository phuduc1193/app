FROM node:8.2.1-alpine

RUN mkdir /api
WORKDIR /api

COPY package.json /api
COPY . /api

RUN yarn
RUN yarn global add gulp

RUN gulp scripts
CMD ["npm", "start"]
