FROM node:18
WORKDIR /var/frontend
# ENV PATH ./node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 3000