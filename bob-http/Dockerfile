FROM mhart/alpine-node-auto

#Create a directory for bob project
RUN mkdir -p /app/bob-http

# Make the new directory as the working directory.
# Working directory will be the current directory when container starts
WORKDIR /app/bob-http

COPY package.json .
RUN npm install --production

COPY . .

CMD ["node", "app.js"]
