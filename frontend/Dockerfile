FROM node:18
WORKDIR /var/frontend
ENV PATH ./node_modules/.bin:$PATH
COPY . ./
RUN npm install
EXPOSE 3000