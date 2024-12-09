ARG NODE_ENV
FROM mcr.microsoft.com/playwright:v1.49.0-noble

RUN apt-get update && apt-get install -y curl
RUN npm install -g modclean

WORKDIR /app

COPY ["package*.json", "./"]
RUN npm ci

# Install Playwright dependencies
RUN npx -y playwright@1.49.0 install --with-deps

# Cleanup
RUN modclean -r
RUN npm uninstall modclean
RUN npm cache clean --force
RUN rm -rf /usr/local/lib/node_modules/modclean