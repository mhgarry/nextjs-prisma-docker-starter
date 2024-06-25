# backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npx eslint . --ext .js,.jsx,.ts,.tsx && npx prettier --check .

EXPOSE 8888

CMD ["npm", "run", "dev"]
