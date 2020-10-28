FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

WORKDIR /test

COPY package*.json /home/node/

RUN npm install && rm package*.json

ENV PATH=/node_modules/.bin:$PATH

USER node

CMD ["npm", "test"]
