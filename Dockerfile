FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

COPY package*.json ./

RUN useradd -r -u 2727 vela && npm install && rm package*.json

USER vela

CMD ["npm", "test"]
