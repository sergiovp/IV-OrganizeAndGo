FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

WORKDIR /home/node

COPY package*.json ./

RUN npm install

ENV PATH=/node_modules/.bin:$PATH

USER node

WORKDIR /test
VOLUME /test

CMD ["npm", "test"]
