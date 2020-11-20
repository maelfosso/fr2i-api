FROM node:12 

WORKDIR /src

ADD package*.json /src/
RUN yarn install --silent

ADD . /src

EXPOSE 3000

CMD npm run prod
