FROM node:18
WORKDIR /var/frontend
ENV PATH ./node_modules/.bin:$PATH
COPY ./package.json ./
RUN npm install --force
COPY . .

EXPOSE 3000