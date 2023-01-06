FROM node:14-alpine3.17 

WORKDIR /home/node/freezerback

COPY . .

RUN npm ci 

EXPOSE 5000

CMD ["node", "freezer-start.js"]
