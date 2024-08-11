FROM node

WORKDIR /mynodeapp


COPY . /mynodeapp/
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
