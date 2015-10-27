# Base image
FROM ubuntu

MAINTAINER Ahmad Shah Hafizan Hamidin

# Update repository
RUN apt-get update

# Install Nodejs
RUN apt-get install nodejs
RUN apt-get install npm

# Install nodemon
RUN npm install -g nodemon

# Setup barcode mircroservice
COPY . /src
RUN cd /src; npm install

EXPOSE 8080
CMD ["nodemon", "src/service.js"]
