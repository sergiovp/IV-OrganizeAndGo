FROM node:14-slim

LABEL version="1.0" maintainer="sergiovp96@gmail.com"

WORKDIR /app

COPY package*.json ./

## BUENA PRÁCTICA HACER QUE EL USUARIO SEA DISTINTO DE ROOT

RUN npm install
#RUN rm package*.json

CMD ["npm", "test"]