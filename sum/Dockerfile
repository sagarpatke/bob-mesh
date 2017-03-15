FROM mhart/alpine-node-auto

RUN mkdir -p /app/sum
WORKDIR /app/sum

COPY package.json .
RUN npm install --production

COPY . .

CMD ["node", "sum-microservice.js"]
