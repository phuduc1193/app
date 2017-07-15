FROM mongo-express:0.40.0
RUN mkdir /api
WORKDIR /api
COPY package.json /api
RUN npm install

COPY . /api

EXPOSE 3000

CMD ["npm", "start"]
