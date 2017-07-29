FROM mongo-express:0.40.0
ENV DATABASE_URL=mongodb://api-db:27017
ENV TOKEN_SECRET=qwert1234
RUN mkdir /api
WORKDIR /api
COPY package.json /api
RUN npm install

COPY . /api

VOLUME . /api

EXPOSE 3000

CMD ["npm", "start"]
