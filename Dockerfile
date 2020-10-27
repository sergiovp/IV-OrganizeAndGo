FROM node:14-alpine

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

COPY package*.json ./

RUN adduser -r -u 2727 vela && npm install && rm package*.json

USER vela

CMD ["npm", "test"]
