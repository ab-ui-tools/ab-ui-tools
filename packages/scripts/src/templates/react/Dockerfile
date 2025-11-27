#Stage 1
FROM node:22-alpine as builder

WORKDIR /app

#COPY .npmrc ./

COPY package*.json .

COPY yarn*.lock .

RUN yarn install

COPY . .

RUN yarn build

#Stage 2
FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

COPY nginx.conf /etc/nginx/nginx.conf

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]