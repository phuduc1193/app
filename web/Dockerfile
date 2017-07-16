FROM nginx:1.13-alpine

ENV APP_PATH /app
ENV PATH $APP_PATH/node_modules/@angular/cli/bin/:$PATH

RUN apk add --update --no-cache nodejs && mkdir $APP_PATH && rm -rf /etc/nginx/conf.d/*
WORKDIR $APP_PATH

COPY . .

COPY nginx/default.conf /etc/nginx/conf.d/

ENV API_HOSTNAME api-gateway

RUN npm install
RUN npm rebuild node-sass --force
RUN rm -rf /usr/share/nginx/html/*
RUN ng build --aot --prod
RUN mv ./dist/* /usr/share/nginx/html/
RUN npm cache clean
RUN apk del nodejs libstdc++ libgcc libuv http-parser ca-certificates
RUN rm -rf ./*

CMD ["nginx", "-g", "daemon off;"]