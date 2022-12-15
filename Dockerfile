FROM node:14.15.4

RUN mkdir -p /usr/Projects/notification-page-main
COPY dist /usr/Projects/notification-page-main/dist
COPY assets /usr/Projects/notification-page-main/assets
COPY data.json /usr/Projects/notification-page-main/
COPY server.js /usr/Projects/notification-page-main/
COPY deploy-package.json /usr/Projects/notification-page-main/package.json
WORKDIR /usr/Projects/notification-page-main
RUN echo 'package-lock=false' >> .npmrc
RUN npm install
EXPOSE 4000
CMD ["node", "server.js"]