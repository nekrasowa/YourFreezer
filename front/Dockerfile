FROM node:14-alpine3.17 

WORKDIR /freezerfront

COPY . .

RUN npm ci

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
# ENV NODE_ENV production

RUN npm run build

# ........

FROM nginx:1.17.0-alpine

COPY --from=build-stage /freezerfront/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT

CMD ["nginx", "-g", "daemon off"]
