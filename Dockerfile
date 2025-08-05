FROM node:24-alpine3.21 AS builder

RUN corepack enable

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:1.29.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
# COPY web-server/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]