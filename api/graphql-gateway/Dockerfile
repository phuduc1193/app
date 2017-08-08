FROM node:8.2.1-alpine
ENV DATABASE_URL=mongodb://api-db:27017
ENV TOKEN_SECRET=qwert1234
RUN mkdir /api
WORKDIR /api
COPY package.json /api
RUN yarn

COPY ./src /api

EXPOSE 3000

CMD ["gulp"]
CMD ["npm", "start"]
