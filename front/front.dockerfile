FROM node:alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY front/package*.json ./
RUN npm install
RUN npm install -g serve
COPY front/ .
RUN npm run build
ENV REACT_APP_PROXY_API=$PROXY_API
CMD serve -s build -p $PORT