FROM node:21-alpine

USER node

WORKDIR /usr/src/app

COPY . .

USER root

RUN apk add --no-cache curl

ENV DOCKERIZE_VERSION v0.19.0
RUN curl -sfL \
	https://github.com/powerman/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-$(uname -s)-$(uname -m) | \
	install /dev/stdin /usr/local/bin/dockerize

EXPOSE 3000

USER node