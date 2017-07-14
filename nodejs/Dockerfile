FROM node:8.1.4
RUN mkdir /api
WORKDIR /api
COPY package.json /api
RUN npm install

COPY . /api

EXPOSE 3000

CMD ["npm", "start"]
