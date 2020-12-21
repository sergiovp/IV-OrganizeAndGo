FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

RUN npm i -g chai mocha chai-http @types/chai @types/mocha @vercel/node && \
    mkdir /node_modules && chmod 755 /node_modules && chown node /node_modules

USER node

COPY --chown=node package*.json ./

RUN npm install

USER root

RUN rm package*.json

ENV PATH=/node_modules/.bin:$PATH

USER node
WORKDIR /test

CMD ["npm", "test"]
