FROM node:9.4.0-alpine as ui

LABEL authors="Niroshan Ranapathi"

WORKDIR /usr/app/ui/
COPY ui/package*.json ./
RUN npm install -qy
COPY ui/ ./
RUN npm start


# Setup the server

FROM node:9.4.0-alpine

LABEL authors="Niroshan Ranapathi"

COPY api/package.json /www/package.json
RUN cd /www; npm install
COPY ./api /www
WORKDIR /www
ENV PORT 3000
EXPOSE  3000

CMD ["npm", "start"]
