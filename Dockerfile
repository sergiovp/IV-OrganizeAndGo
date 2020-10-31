FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

WORKDIR /home/node
USER node

COPY package*.json ./

RUN npm install --no-optional \
    && rm package*.json

ENV PATH=/node_modules/.bin:$PATH

WORKDIR /test
VOLUME /test

CMD ["npm", "test"]
