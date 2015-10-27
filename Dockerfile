# Base image
FROM ubuntu

MAINTAINER Ahmad Shah Hafizan Hamidin

# Update repository
RUN apt-get update

# Install Nodejs
RUN apt-get install -y nodejs npm

# Setup barcode mircroservice
COPY . /src
WORKDIR /src
RUN npm install

EXPOSE 8080

CMD ["nodejs", "service.js"]
