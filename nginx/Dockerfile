FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

RUN apk add --no-cache curl

ENV DOCKERIZE_VERSION v0.19.0
RUN curl -sfL \
	https://github.com/powerman/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-$(uname -s)-$(uname -m) | \
	install /dev/stdin /usr/local/bin/dockerize

EXPOSE 80
