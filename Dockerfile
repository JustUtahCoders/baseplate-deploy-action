# This whole file exists as a workaround to Github actions not letting us upgrade to Node 18
FROM node:18
RUN npm install -g pnpm
WORKDIR /github/workspace
COPY package.json .
COPY src src
RUN find /github/workspace
RUN npm pkg delete scripts.prepare
RUN pnpm install --production
ENTRYPOINT node src/baseplate-deploy-action.mjs