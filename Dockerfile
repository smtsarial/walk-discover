FROM node:15.5-slim
WORKDIR /app
COPY . .
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN yarn install
CMD ["yarn","run", "build"]


FROM nginx:1.19.0-alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
