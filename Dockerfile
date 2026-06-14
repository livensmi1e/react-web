FROM node:24-alpine3.21 AS builder

RUN corepack enable

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

ARG VITE_API_BASE_URL=/api
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY . .
RUN yarn build

FROM nginx:1.29.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY web-server/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
