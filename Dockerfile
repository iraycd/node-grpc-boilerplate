FROM keymetrics/pm2:8

RUN apk add --no-cache --virtual .build-deps \
    binutils-gold \
    curl \
    g++ \
    gcc \
    gnupg \
    libgcc \
    linux-headers \
    make \
    python \
    libc6-compat


# Copy only source
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# Copy proto to the ROOT directory: It's easy to access and no confusion.
RUN mkdir /proto
COPY ./proto /proto


# Setting the directory
COPY ./package*.json /usr/src/app/
RUN npm install

# Copying the source.
COPY ./config/ /usr/src/app/config/
COPY ./src/ /usr/src/app/src/

# Expose the PORT before starting.
EXPOSE 50051

ENV NODE_ENV=production \
    LOGGER_LEVEL=info 

#Building the files.
RUN yarn build

COPY ./pm2*.json /usr/src/app/

CMD [ "pm2-docker", "start", "--json", "pm2.json" ]