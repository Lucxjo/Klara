FROM node:latest

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

COPY .yarn/ ./.yarn/
COPY .pnp.cjs .yarnrc.yml package.json yarn.lock ./
RUN ["yarn", "install"]
COPY . ./

COPY . /usr/src/bot

CMD [ "yarn", "start" ]