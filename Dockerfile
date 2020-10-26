FROM node:14-alpine

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

COPY package*.json ./

## BUENA PRÁCTICA HACER QUE EL USUARIO SEA DISTINTO DE ROOT

RUN npm install
RUN rm package*.json

CMD ["npm", "test"]