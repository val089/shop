FROM node:alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY api/package*.json ./
RUN npm install
COPY api/ .
EXPOSE $PORT
CMD ["npm" "start"]