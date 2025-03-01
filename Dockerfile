FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

ARG REACT_APP_NEWSAPI_KEY
ENV REACT_APP_NEWSAPI_KEY=3f26b8991cb143efa0139de274a31192

RUN npm run build

CMD ["npx", "serve", "-s", "build"]
