FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

RUN npm i -g mocha chai ts-node typescript && mkdir /node_modules && chmod 755 /node_modules && chown node /node_modules 

USER node
COPY --chown=node package*.json ./
RUN npm i && rm package*.json

WORKDIR /test

CMD ["npm","run","test"]
