FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Expose Vite default port
EXPOSE 5173

CMD ["npm", "run", "dev"]
