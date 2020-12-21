FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

COPY package*.json ./

RUN npm install --no-optional \
    && rm package*.json \
    && apt update -y \
    && apt install build-essential -y

ENV PATH=/node_modules/.bin:$PATH

WORKDIR /test
VOLUME /test

USER node

CMD ["npm", "test"]
