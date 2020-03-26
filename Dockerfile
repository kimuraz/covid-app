FROM node

RUN mkdir /app
WORKDIR /app
ADD . /app

EXPOSE 3000

RUN yarn install
CMD ["yarn", "start"]
