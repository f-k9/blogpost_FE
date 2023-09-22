FROM node:18.15.0-alpine as builder
WORKDIR /uek223-frontend-2-d
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /uek223-frontend-2-d/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]