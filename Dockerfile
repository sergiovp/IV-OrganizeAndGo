FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

COPY package*.json ./
RUN pwd
RUN npm install \
    && rm package*.json

WORKDIR /home/node/test
VOLUME /home/node/test

ENV PATH=/node_modules/.bin:$PATH

USER node

CMD ["npm", "test"]
