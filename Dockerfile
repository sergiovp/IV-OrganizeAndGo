FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

USER node

COPY package*.json ./

RUN npm install && rm package*.json

WORKDIR /test

ENV PATH=/node_modules/.bin:$PATH

#USER vela

CMD ["npm", "test"]
