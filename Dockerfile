ARG NODE_ENV
FROM mcr.microsoft.com/playwright:focal

#RUN apt-get update && apt-get install -y curl
RUN npm install -g modclean

WORKDIR /app

COPY ["package*.json", "./"]

RUN npm install

RUN npx playwright install

COPY . .

CMD ["npx", "playwright", "test"]

# Cleanup
RUN modclean -r
RUN npm uninstall modclean
RUN npm cache clean --force
RUN rm -rf /usr/local/lib/node_modules/modclean

