FROM centos:8

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

COPY package*.json ./

RUN npm install \
    && rm package*.json

ENV PATH=/node_modules/.bin:$PATH

USER node

WORKDIR /test
VOLUME /test

CMD ["npm", "test"]