FROM node:alpine
#le chemin ou ila va se trouver notre projet dans le container
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# copier tous les ficher vers le container
COPY . .
EXPOSE 9000
CMD ["node", "app.js"]