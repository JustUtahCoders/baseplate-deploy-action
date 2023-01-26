# This whole file exists as a workaround to Github actions not letting us upgrade to Node 18
FROM node:18
RUN npm install -g pnpm
COPY package.json .
COPY src src
RUN npm pkg delete scripts.prepare
RUN pnpm install --production
ENTRYPOINT node src/baseplate-deploy-action.mjs