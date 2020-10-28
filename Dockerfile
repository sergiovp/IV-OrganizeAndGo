FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

COPY package*.json ./

RUN npm install

WORKDIR /test
VOLUME /test

ENV PATH=/node_modules/.bin:$PATH

USER node

CMD ["npm", "test"]
