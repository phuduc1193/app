FROM mongo-express:0.40.0

ENV PORT=3030
ENV DATABASE_HOST=resourcedb
ENV DATABASE_NAME=resource
ENV DATABASE_USER=user
ENV DATABASE_PASSWORD=qwerty12345
ENV DATABASE_PORT=3306

RUN mkdir /api
WORKDIR /api
COPY package.json /api
RUN npm install

COPY ./src /api

EXPOSE 3030

CMD ["gulp"]
CMD ["npm", "start"]
