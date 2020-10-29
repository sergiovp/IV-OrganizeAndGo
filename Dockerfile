FROM node:14-alpine

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

WORKDIR /home/node

COPY package*.json ./

RUN npm i --production \
    && rm package*.json

ENV PATH=/node_modules/.bin:$PATH

USER node

WORKDIR /test
VOLUME /test

CMD ["npm", "test"]